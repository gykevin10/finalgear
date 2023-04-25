import Social from "@/components/Social"
import { Cog8ToothIcon, HomeIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="bg-gray-800 flex justify-between py-1">
      <Link href="/">
        <HomeIcon className="w-6 h-6 text-white" />
      </Link>

      <Social />

      <button>
        <Link href="/settings">
          <Cog8ToothIcon className="w-6 h-6 text-white" />
        </Link>
      </button>
    </div>
  )
}

export default Footer
