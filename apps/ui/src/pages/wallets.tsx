import { Link, useNavigate } from "@tanstack/react-router"
import Modal from "../components/modal"
import { columns } from "../components/table/columns"
import { DataTable } from "../components/table/datatable"
import WalletCard from "../components/wallet-card"
import { Transaction, WalletWithTransactions } from "../core/types"
import Conversions from "./conversions"
import { LuArrowLeftRight } from "react-icons/lu";
import React, { useEffect, useState } from "react"
import { indexRoute } from "../routes/route-definitions"
import { GoSearch } from "react-icons/go";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";


type Props = {}

function Wallets({ }: Props) {
  const navigate = useNavigate();
  const searchParams = indexRoute.useSearch();
  const wallets = indexRoute.useLoaderData();

  const [selectedWallet, setSelectedWallet] = useState<WalletWithTransactions>()

  useEffect(() => {
    if (wallets) {
      if (searchParams.wallet === undefined) {
        const defaultSelectedWallet = wallets[0]
        navigate({ to: "/", search: { wallet: defaultSelectedWallet.walletType } })
        setSelectedWallet(defaultSelectedWallet as WalletWithTransactions)
      } else {
        const defaultSelectedWallet = wallets.find((wallet) => wallet.walletType === searchParams.wallet)
        setSelectedWallet(defaultSelectedWallet as WalletWithTransactions)
      }
    }
  }, [])



  return (
    <div>
      <Modal title="Convert funds">
        <Conversions />
      </Modal>
      <div className="flex justify-between items-center">
        <div>
          <h1>Wallets</h1>
          <p>View your balances and transaction history</p>
        </div>

        <div>
          <Link search={{ wallet: searchParams.wallet, convert: true }}>
            <button className="flex justify-center items-center px-6 gap-2 custom">
              <LuArrowLeftRight />
              <div>
                Convert
              </div>
            </button>
          </Link>
        </div>
      </div>



      <div className="mt-10">
        <div className="flex gap-6">

          {wallets.map((wallet) => (
            <React.Fragment key={wallet.id}>
              <WalletCard wallet={wallet} onSelect={(selectedWallet) => setSelectedWallet(selectedWallet)} />
            </React.Fragment>
          ))}
        </div>

        <div className="bg-white border-b rounded-b-lg pb-4">
          <div className="pt-6 p-4">
            <h3>Transaction history</h3>

            <div className="flex justify-between mt-5">
              <div>
                <div className="input mt-2 text-gray2 text-xsm">
                  <p><GoSearch size={22} /></p>
                  <input type="text" placeholder="Search by transaction ID" className="w-48" />
                </div>
              </div>

              <div className="flex gap-3">
                <div>
                  <div className="input mt-2 text-gray2 text-xsm relative">
                    <input id="date" type="date"/>
                  </div>
                </div>

                <div>
                  <div className="input mt-2 text-gray2 text-xsm px-2">
                    <p><LiaCloudDownloadAltSolid size={22} /></p>
                    <button>Download</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-5">
            {selectedWallet && (<DataTable columns={columns} data={selectedWallet?.transactionHistory as Transaction[]} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallets