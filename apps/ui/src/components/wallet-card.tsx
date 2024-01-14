import { Link } from '@tanstack/react-router'
import { indexRoute } from '../routes/route-definitions';
import { Wallet, WalletWithTransactions } from '../core/types';
import moment from 'moment';
import { TbRefresh } from "react-icons/tb";


type Props = {
    wallet: Wallet;
    onSelect: (selectedWallet: WalletWithTransactions) => void;
}

const WalletCard = (props: Props) => {
    const searchParams = indexRoute.useSearch();

    return (
        <div>
            <Link onClick={() => props.onSelect(props.wallet as WalletWithTransactions)} search={{ wallet: props.wallet.walletType }} className={`card p-4 ${searchParams.wallet === props.wallet.walletType ? "bg-white1" : "bg-light2"}`}>
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex gap-2 items-center'>
                        {props.wallet.balance.currency.flag ? (<img src={props.wallet.balance.currency.flag} className="h-5 rounded-full" />) : (<p>flag</p>)}

                        <p className={`text-xsm ${searchParams.wallet !== props.wallet.walletType && "text-gray2"}`}>{props.wallet.walletType}</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='font-semibold text-sm'>{
                            Intl.NumberFormat('en-US', {
                                notation: "compact",
                                maximumFractionDigits: 1
                            }).format(props.wallet.balance.amount)
                        }</p>
                        <p className='text-xxxsm flex items-center gap-1'>
                            <TbRefresh />
                            {moment(props.wallet.updatedAt).format('MMM D')}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default WalletCard
