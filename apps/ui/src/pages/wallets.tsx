import { columns, dummyTransactions } from "../components/table/columns"
import { DataTable } from "../components/table/datatable"
import WalletCard from "../components/wallet-card"

type Props = {}

function Wallets({ }: Props) {

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1>Wallets</h1>
          <p>View your balances and transaction history</p>
        </div>

        <div>
          <button>Convert</button>
        </div>
      </div>


      <div className="mt-10">
        <div className="flex gap-6">
          <WalletCard link="ghc" />

          <WalletCard link="usd" />

          <WalletCard link="gbp" />

          <WalletCard link="eur" />
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
    </div>
  )
}

export default Wallets