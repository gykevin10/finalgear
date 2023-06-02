import { useAppContext } from "@/components/AppContext.jsx"
import Link from "@/components/Link"
import Page from "@/components/Page"
import api from "@/services/api"
import { useRouter } from "next/router"
import { useCallback, useState } from "react"
import { BsExclamationOctagon } from "react-icons/bs"
import Contact from "./contact"

const settings = () => {
  const [isactive, setIsactive] = useState(false)
  const {
    state: { session },
  } = useAppContext()
  const router = useRouter()
  const { setSession } = useAppContext()
  const handelActive = () => {
    setIsactive(true)
  }
  const hendelCancel = () => {
    setIsactive(false)
  }

  const handelDelete = useCallback(async () => {
    const {
      data: { count },
    } = await api.delete(`/users/${session.user.id}`)

    if (count) {
      setSession()
      router.push("/")

      return
    }
  }, [router, session, setSession])

  return (
    <Page name={settings}>
      <div className="p-10">
        <h1 className=" text-3xl font-bold mb-10">Settings</h1>
        <div>
          <h1 className="text-xl font-bold">Profil:</h1>
          {session ? (
            <div className="px-5 flex flex-col gap-5">
              <div className="text-center font-bond underline">
                {session.user.role === "ADMIN" ? (
                  <h1 className=" skew-y-12">ADMINISRATOR</h1>
                ) : null}
              </div>
              <h1>Name: {session.user.username}</h1>
              <h1>DisplayName: {session.user.displayName}</h1>
              <h1>email: {session.user.email}</h1>
              <div className="flex">
                <div className="flex gap-5 justify-center">
                  <Link
                    className="mt-5 p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
                    href="/users/user-update"
                  >
                    Modify{" "}
                  </Link>
                  <button
                    className="mt-5 p-2 text font-bold text-white bg-red-600 active:bg-red-300 rounded"
                    isactive={isactive}
                    onClick={handelActive}
                  >
                    Delete
                  </button>
                </div>

                {isactive && (
                  <div className=" w-full h-screen absolute top-0 left-0  p-3 rounded-xl flex flex-col items-center ">
                    <section className="flex flex-col items-center gap-5 h-64 w-64 mt-[150px] pt-10  bg-gradient-to-b from-red-500 to-pink-500 rounded-2xl">
                      <BsExclamationOctagon className="w-20 h-20" />
                      <p className="text-black font-bold text-2xl pb-2 text-center animate-ping ">
                        ARE YOU SURE !?
                      </p>
                      <div className="flex gap-5">
                        <button
                          className=" p-2 text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
                          onClick={hendelCancel}
                        >
                          Cancel
                        </button>
                        <button
                          className=" p-2 text font-bold text-white bg-red-600 active:bg-red-300 rounded"
                          onClick={handelDelete}
                        >
                          Confirm
                        </button>
                      </div>
                    </section>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-red-700 text-3xl font-bold text-center">
                Not registered
              </p>
              <div className="mt-5 flex justify-center">
                <Link className="bg-blue-500 px-5 py-2" href="/users/sign-up">
                  Sign-Up
                </Link>
              </div>
            </div>
          )}
        </div>
        <Contact />
      </div>
    </Page>
  )
}
export default settings
