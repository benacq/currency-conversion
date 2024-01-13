import { Link } from '@tanstack/react-router'
import { indexRoute } from '../routes/route-definitions';

type Props = {
    link: string;
}

const WalletCard = (props: Props) => {
    const searchParams = indexRoute.useSearch()
    // console.log(searchParams)

    return (
        <div>
            <Link search={{ wallet: props.link }} className={`card ${searchParams.wallet === props.link ? "bg-white1" : "bg-light2"}`}>
                Card 1
            </Link>
        </div>
    )
}

export default WalletCard