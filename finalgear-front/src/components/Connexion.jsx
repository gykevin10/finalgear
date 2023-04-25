import { UserIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useState } from "react"

const Connexion = () => {
  const [open, setOpen] = useState([false])
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div>
      <button className="text-3xl cursor-pointer" onClick={handleOpen}>
        <Link href="/login">
          <UserIcon className="m-2 w-6 h-6 mt-5 text-white" />
        </Link>
      </button>
    </div>
  )
}

export default Connexion
