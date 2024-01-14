import { Link } from "@tanstack/react-router"
import useCustomQuery from "../components/hooks/useCustomQuery"
import Modal from "../components/modal"
import { columns, dummyTransactions } from "../components/table/columns"
import { DataTable } from "../components/table/datatable"
import WalletCard from "../components/wallet-card"
import { getWallets } from "../core/requests/wallets"
import { Transaction, Wallet } from "../core/types"
import Conversions from "./conversions"
import { LuArrowLeftRight } from "react-icons/lu";
import React, { useState } from "react"
import { indexRoute } from "../routes/route-definitions"


type Props = {}

function Wallets({ }: Props) {
  const searchParams = indexRoute.useSearch();

  const query = useCustomQuery<Wallet[]>(
    ['wallets'],
    getWallets,
  )

  const [transactions, setTransasctions] = useState<Transaction[]>([])

  // console.log(query)

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
          <Link search={{ convert: true }}>
            <button className="flex justify-center items-center px-6 gap-2">
              <LuArrowLeftRight />
              <div>
                Convert
              </div>
            </button>
          </Link>

        </div>
      </div>

      {query.isPending ? (<>
        <div>
          Loading...
        </div>

      </>) : (<>

        {query.isError ? (<>

          <div>Something went wrong</div>

        </>) : (<>


          <div className="mt-10">
            <div className="flex gap-6">

              {query.data.map((wallet) => (
                <React.Fragment key={wallet.id}>
                  <WalletCard wallet={ wallet} />
                </React.Fragment>

              ))}

            </div>

            <div className="bg-white border-b rounded-b-lg pb-4">
              <div className="pt-6 p-4">
                <h3>Transaction history</h3>
              </div>

              <div>
                <DataTable columns={columns} data={dummyTransactions} />
              </div>

            </div>
          </div>
        </>)}



      </>)}




    </div>
  )
}

export default Wallets