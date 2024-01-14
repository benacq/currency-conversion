import { Link } from '@tanstack/react-router'
import { indexRoute } from '../routes/route-definitions';
import { Wallet } from '../core/types';

type Props = {
    wallet: Wallet
}

const WalletCard = (props: Props) => {
    const searchParams = indexRoute.useSearch();

    return (
        <div>
            <Link search={{ wallet: props.wallet.walletType }} className={`card p-4 ${searchParams.wallet === props.wallet.walletType ? "bg-white1" : "bg-light2"}`}>
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex gap-2'>
                        <div>flag</div>
                        <p className={`text-xsm ${searchParams.wallet !== props.wallet.walletType && "text-gray2"}`}>{props.wallet.walletType}</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='font-semibold text-sm'>{props.wallet.balance.amount}</p>
                        <p className='text-xxsm'>Aug 25</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default WalletCard
