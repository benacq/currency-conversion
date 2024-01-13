import { Link } from "@tanstack/react-router"

type Props = {}

function Sidebar({ }: Props) {
    return (
        <div className="flex flex-col justify-between h-full">

            <div className="side-menu-item">
                <div className="flex justify-center mb-10">
                    <img src="/wewire.svg" className="h-8" />
                </div>

                <Link to="/">
                    <i> <img src="/wallet.png" className="h-5" /></i>  <span>Wallets</span>
                </Link>

                <Link to="/conversions" className="mt-8">
                    <i> <img src="/conversion.png" className="h-5" /></i>  <span>Conversions</span>
                </Link>
            </div>

            <div>
                <div className="flex gap-3 items-center">
                    <i> <img src="/help.png" className="h-5" /></i>  <span>Help</span>
                </div>
                <div className="flex gap-3 items-center my-5">
                    <i> <img src="/support.svg" className="h-5" /></i>  <span>Support</span>
                </div>
            </div>
        </div>

    )
}

export default Sidebar