import { Link } from '@tanstack/react-router'
import { indexRoute } from '../routes/route-definitions';

type Props = {
    link: string;
}

const WalletCard = (props: Props) => {
    const searchParams = indexRoute.useSearch()

    return (
        <div>
            <Link search={{ wallet: props.link }} className={`card p-4 ${searchParams.wallet === props.link ? "bg-white1" : "bg-light2"}`}>
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex gap-2'>
                        <div>flag</div>
                        <p className={`text-xsm ${searchParams.wallet !== props.link ? "text-gray2":""}`}>NGN</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='font-semibold text-sm'>500K</p>
                        <p className='text-xxsm'>Aug 25</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default WalletCard