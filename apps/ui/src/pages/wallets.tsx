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


type Props = {}

function Wallets({ }: Props) {
  const navigate = useNavigate();
  const searchParams = indexRoute.useSearch();
  const wallets = indexRoute.useLoaderData();

  const [selectedWallet, setSelectedWallet] = useState<WalletWithTransactions>()

  useEffect(() => {
    if (wallets) {
      console.log(wallets[0])
      const defaultSelectedWallet =  wallets[0]
      console.log(searchParams.wallet)
      if(searchParams.wallet === undefined){
        navigate({ to: "/", search: { wallet: defaultSelectedWallet.walletType } })
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
            <button className="flex justify-center items-center px-6 gap-2">
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
          </div>

          <div>
            {selectedWallet && (<DataTable columns={columns} data={selectedWallet?.transactionHistory as Transaction[]} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallets