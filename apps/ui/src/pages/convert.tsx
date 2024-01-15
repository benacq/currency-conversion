import { useState } from "react"
import DropdownSelect from "../components/select/select"
import { DropdownType } from "../components/select/types"
import { getWallets } from "../core/requests/wallets"
import { useForm } from 'react-hook-form';
import useCustomMutation from "../components/hooks/useCustomMutation";
import { ConvertionPayload, convert } from "../core/requests/convert";
import useCustomQuery from "../components/hooks/useCustomQuery";
import { getExchangeRate } from "../core/requests/exchange-rates";
import { findWalletById, transformWallet } from "../core/utils/functions";
import { Wallet } from "../core/types";
import { toast } from "react-toastify";

type Props = {}

function Convert({ }: Props) {
  const [wallets, setWallet] = useState<Record<string, Record<string, string>>>({ sourceWallet: {}, targetWallet: {} })
  const isSourceAndTargetWalletEmpty = Object.keys(wallets["sourceWallet"]).length > 0 && Object.keys(wallets["targetWallet"]).length > 0;

  const query = useCustomQuery(["rates", wallets],
    () => getExchangeRate(wallets),
    {
      refetchOnWindowFocus: false,
      enabled: isSourceAndTargetWalletEmpty,
      retry: false
    })


  const walletsQuery = useCustomQuery(["wallets"],
    () => getWallets(false),
    {
      refetchOnWindowFocus: false,
      retry: 2
    })


  const {
    register,
    handleSubmit,
    reset,
    setValue,
  } = useForm<{ sourceAmount: string, targetAmount: string }>({
  });


  const mutation = useCustomMutation<any, ConvertionPayload>(
    convert,
    {
      onSuccess: () => {
        toast.success("Conversion successful", { position: "top-left" });
        // window.location.reload();
        history.back()
      }
    }
  )

  const onSubmit = (data: any) => {
    const payload = { sourceWalletId: wallets["sourceWallet"]["value"], targetWalletId: wallets["targetWallet"]["value"], amount: parseFloat(data["sourceAmount"]) } as ConvertionPayload
    mutation.mutateAsync(payload);
  };


  return (

    <>
      {walletsQuery?.isLoading ? (<>
        <p>Loading...</p>
      </>) : (<>
        {walletsQuery.isError ? (<>
          <p>Something went wrong</p>
        </>) : (<>
          <form
            onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="flex justify-between items-center gap-2">
                <div className=" w-[45%]">
                  <p className="text-xsm mb-1">Source wallet</p>

                  <div>
                    <DropdownSelect
                      instanceId="sourceWallet"
                      options={transformWallet(walletsQuery.data as Wallet[])}
                      selectType={DropdownType.Sync}

                      onChange={(wallet: any) => {
                        setWallet((prevWallets) => ({
                          ...prevWallets,
                          sourceWallet: wallet,
                        }));
                        reset()
                      }}
                      regularStyles={{
                        height: 40,
                        containerBorder: "1px solid #d0d5dd"
                      }}
                    />
                  </div>


                  <div className="input mt-2">
                    <p>{wallets["sourceWallet"]["label"] ?? "__"}</p>
                    <input step={".01"} disabled={!isSourceAndTargetWalletEmpty} type="number" defaultValue={0} {...register("sourceAmount")} onChange={(e) => {
                      const newAmount = (parseFloat(e.target.value) * (query.data?.sourceToTarget as number)).toFixed(2)
                      setValue("targetAmount", newAmount.toString())
                    }} />
                  </div>
                </div>


                <div className="w-[10%]">
                  <div className=" rounded-full bg-orange3 p-2">
                    <img src="/shuffle.svg" className="h-5" />
                  </div>
                </div>


                <div className="w-[45%]">
                  <p className="text-xsm mb-1">Destination wallet</p>
                  <div>
                    <DropdownSelect
                      instanceId="destinationWallet"
                      options={transformWallet(walletsQuery.data as Wallet[])}
                      selectType={DropdownType.Sync}
                      onChange={(wallet: any) => {
                        setWallet((prevWallets) => ({
                          ...prevWallets,
                          targetWallet: wallet,
                        }));
                        reset()
                      }}
                      regularStyles={{
                        height: 40,
                        containerBorder: "1px solid #d0d5dd"
                      }}
                    />
                  </div>


                  <div className="input mt-2">
                    <p>{wallets["targetWallet"]["label"] ?? "__"}</p>
                    <input step={".01"} disabled={!isSourceAndTargetWalletEmpty} type="number" defaultValue={0} {...register("targetAmount")} onChange={(e) => {
                      const newAmount = (parseFloat(e.target.value) * (query.data?.targetToSource as number)).toFixed(2)
                      setValue("sourceAmount", newAmount.toString())
                    }} />
                  </div>
                </div>
              </div>
              <p className="text-[10px] !text-gray2 mt-1">
                {wallets["sourceWallet"]["value"] &&
                  (`Available balance: ${findWalletById(walletsQuery.data as Wallet[], wallets["sourceWallet"]["value"]).balance.currency.symbol} 
                ${findWalletById(walletsQuery.data as Wallet[], wallets["sourceWallet"]["value"]).balance.amount}`)}
              </p>

              <div>
                <div className="bg-orange4 p-3 flex justify-between text-xxsm mt-12">
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] !text-gray2">Exchange rate:</p>

                    {query.data?.sourceToTarget && (<>
                      <p>{`1 ${wallets["sourceWallet"]["label"]} = ${query.data?.sourceToTarget} ${wallets["targetWallet"]["label"]}`}</p>
                      <p>{`1 ${wallets["targetWallet"]["label"]} = ${query.data?.targetToSource} ${wallets["sourceWallet"]["label"]}`}</p>
                    </>)}
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] !text-gray2">Transaction fee:</p>
                    {query.data?.sourceToTarget && (<>
                      <p>1 {wallets["sourceWallet"]["label"]}</p>
                    </>)}
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] !text-gray2">Estimated arrival:</p>
                    {query.data?.sourceToTarget && (<>
                      <p>11/04/24, 12:23</p>
                    </>)}
                  </div>
                </div>

                <button className="mt-10 custom">
                  {mutation.isPending ? (<>
                    Converting...
                  </>) : (<>
                    Convert
                  </>)}
                </button>
              </div>
            </div>
          </form>



        </>)}


      </>)}


    </>

  )
}

export default Convert