import { useRouter } from "@tanstack/react-router"
import { PiCaretDown } from "react-icons/pi"

type Props = {}

function Nav({ }: Props) {
  const router = useRouter();
  return (
    <div className="h-16 border-b-2 border-b-light4 flex justify-between items-center px-8">
      <div className="text-xxsm">
        Wallets {">"} Balances
      </div>
      <div className="flex gap-2 items-center">
        <div className=" rounded-full bg-orange2 p-2">
          <img src={'/notification.png'} className="h-5 rounded-full" />
        </div>

        <div className="flex gap-2 items-center bg-orange2 py-2 px-2 rounded-full">
          <img src={'/user.png'} className="h-5 rounded-full" />
          <p className="text-[10px]">Account</p>
          <PiCaretDown size={15} />
        </div>

      </div>
    </div>
  )
}

export default Nav