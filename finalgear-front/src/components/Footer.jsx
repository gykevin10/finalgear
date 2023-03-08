import { Cog8ToothIcon, HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-slate-500 to-iwhite flex justify-between z-100">
      <Link href="/home">
        <HomeIcon className="w-6 h-6" />
      </Link>

      <button>
        <Link href="/settings">
          <Cog8ToothIcon className="w-6 h-6" />
        </Link>
      </button>
    </div>
  )
}

export default Footer
