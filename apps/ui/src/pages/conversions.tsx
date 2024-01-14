import { useEffect, useState } from "react"
import DropdownSelect from "../components/select/select"
import { DropdownType } from "../components/select/types"
import { getWalletsForSelect } from "../core/requests/wallets"
import * as Yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useCustomMutation from "../components/hooks/useCustomMutation";
import { convert } from "../core/requests/convert";
import useCustomQuery from "../components/hooks/useCustomQuery";
import { getExchangeRate } from "../core/requests/exchange-rates";

type Props = {}

const validationSchema = Yup.object({
  sourceWalletId: Yup.string().min(1, 'Enter amount').required("Please enter amount"),
  targetWalletId: Yup.string().min(1, 'Enter amount').required("Please enter amount"),
});


function Conversions({ }: Props) {

  const [sourceAmount, setSourceAmount] = useState<number>(0)
  const [destinationAmount, setDestinationAmount] = useState<number>(0)


  const [wallets, setWallet] = useState<Record<string, Record<string, string>>>({ sourceWallet: {}, targetWallet: {} })
  
  const query = useCustomQuery(["rates", wallets],
    () => getExchangeRate(wallets),
    {
      refetchOnWindowFocus: false,
      enabled: Object.keys(wallets["sourceWallet"]).length > 0 &&  Object.keys(wallets["targetWallet"]).length > 0,
      retry: false
    })

  // console.log(wallets)


  // const query = useCustomQuery(["rates"],
  // () => getExchangeRate( { from: "Testfrom", to: "testTo"}),
  // {
  //   refetchOnWindowFocus: false,
  //   enabled: false,
  //   retry: false
  // })


  console.log(query.data)

  // useEffect(() => {
  //   query.refetch()
  //   console.log("called")

  //   // return () => {
  //   //   second
  //   // }
  // }, [wallets["sourceWallet"], wallets["targetWallet"]])


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ sourceWalletId: string, targetWalletId: string }>({
    resolver: yupResolver(validationSchema)
  });

  // const mutation = useCustomMutation<{
  //   access_token: string;
  //   refresh_token: string;
  // }, {sourceWalletId: string, targetWalletId: string}>(
  //   convert,
  //   {
  //     onSuccess: (_) => {
  //       // router.push("/home")
  //     }
  //   }
  // );
  const onSubmit = (data: any) => {
    // mutation.mutateAsync(data);
  };

  // console.log(sourceWallet)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="flex justify-between items-center gap-2">
          <div className=" w-[45%]">
            <p className="text-xsm mb-1">Source wallet</p>

            <div>
              <DropdownSelect
                instanceId="sourceWallet"

                selectType={DropdownType.Async}
                onChange={(wallet: any) => {
                  setWallet((prevWallets) => ({
                    ...prevWallets,
                    sourceWallet: wallet,
                  }));
                }}
                asyncProps={{
                  loadOptions: getWalletsForSelect,
                  cacheOptions: true,
                  defaultOptions: true,
                }}
                regularStyles={{
                  height: 40,
                  containerBorder: "1px solid #d0d5dd"
                }}
              />
            </div>


            <div className="input mt-2">
              <p>{wallets["sourceWallet"]["label"] ?? "__"}</p>
              <input type="number" defaultValue={0} />
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
                selectType={DropdownType.Async}
                onChange={(wallet: any) => {
                  setWallet((prevWallets) => ({
                    ...prevWallets,
                    targetWallet: wallet,
                  }));
                }}
                asyncProps={{
                  loadOptions: getWalletsForSelect,
                  cacheOptions: true,
                  defaultOptions: true,
                }}

                regularStyles={{
                  height: 40,
                  containerBorder: "1px solid #d0d5dd"
                }}
              />
            </div>


            <div className="input mt-2">
              <p>{wallets["targetWallet"]["label"] ?? "__"}</p>
              <input type="number" defaultValue={0} />
            </div>
          </div>
        </div>
        <p className="text-[10px] !text-gray2 mt-1">Available balance: $12</p>

        <div>
          <div className="bg-orange4 p-3 flex justify-between text-xxsm mt-12">
            <div className="flex flex-col gap-1">
              <p className="text-[10px] !text-gray2">Exchange rate:</p>
              <p>{`1 ${wallets["sourceWallet"]["label"]} = ${query.data?.sourceToTarget}`}</p>
              <p>{`1 ${wallets["targetWallet"]["label"]} = ${query.data?.targetToSource}`}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[10px] !text-gray2">Transaction fee:</p>
              <p>1 {wallets["sourceWallet"]["label"]}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[10px] !text-gray2">Estimated arrival:</p>
              <p>11/04/24, 12:23</p>
            </div>
          </div>

          <button className="mt-10">Convert</button>
        </div>
      </div>
    </form>
  )
}

export default Conversions