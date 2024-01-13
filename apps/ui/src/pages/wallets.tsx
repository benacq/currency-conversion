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
        <div className="flex gap-10">
            <WalletCard link="ghc"/>

            <WalletCard link="usd"/>

            <WalletCard link="gbp"/>

            <WalletCard link="eur"/>

        </div>
      </div>
    </div>
  )
}

export default Wallets