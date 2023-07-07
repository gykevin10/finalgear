import { useAppContext } from "@/components/AppContext"
import AvatarComponent from "@/components/AvatarComponent"
import ImageComponent from "@/components/ImageComponent"
import { ArrowLeftOnRectangleIcon, UserIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Status = () => {
  const {
    state: { session },
    setSession,
  } = useAppContext()
  const router = useRouter()
  const [user, setUser] = useState(null)
  const handleClick = () => {
    localStorage.removeItem("session_jwt")
    setSession()
    router.reload()
  }

  useEffect(() => {
    if (!session) {
      return
    }

    setUser(session.user)
  }, [session])

  return (
    <div className="flex">
      <div className="inline-flex my-auto">
        {user ? (
          <>
            <button onClick={handleClick}>
              <ArrowLeftOnRectangleIcon className="text-white w-6 h-6 mr-3" />
            </button>
            <button className="mr-3 text-white">
              <Link href="/settings">{user.displayName}</Link>
            </button>
            <AvatarComponent userId={user.id} />
          </>
        ) : (
          <button className="text-3xl">
            <Link href="/users/sign-up">
              <UserIcon className="text-white w-6 h-6 mr-3" />
            </Link>
          </button>
        )}
      </div>
    </div>
  )
}

export default Status
