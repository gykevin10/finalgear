import Page from "@/components/Page"
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"
import { useCallback, useState } from "react"
import api from "@/services/api"
import { useRouter } from "next/router"
import { useAppContext } from "@/components/AppContext"
import Link from "next/link"

const settings = () => {
  const [isactive, setIsactive] = useState(false)
  const {
    state: { session },
  } = useAppContext()
  const router = useRouter()
  const { setSession } = useAppContext()
  const handleActive = () => {
    setIsactive(true)
  }
  const handleCancel = () => {
    setIsactive(false)
  }

  const handleDelete = useCallback(async () => {
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
    <Page>
      <div className="p-10 h-full bg-cover bg-no-repeat bg-center bg-[url('/background/clive.jpeg')]">
        <h1 className="text-white text-2xl font-bold text-center">Settings</h1>
        <div>
          <h2 className="text-xl font-bold text-white">Profil :</h2>
          {session ? (
            <div className="px-5 flex flex-col gap-5 border-2 border-white w-52">
              <div className="text-center font-bold underline">
                {session.user.role === "ADMIN" ? (
                  <h3 className=" skew-y-12">ADMINISRATOR</h3>
                ) : null}
              </div>
              <h4 className="text-white">Name : {session.user.username}</h4>
              <h5 className="text-white">
                DisplayName : {session.user.displayName}
              </h5>
              <h6 className="text-white">Email : {session.user.email}</h6>
              <div className="flex">
                <div className="flex gap-5 justify-center mb-3">
                  <Link
                    className="mt-5 px-3 py-2 font-bold text-white text-xs bg-blue-700 active:bg-blue-600 border-2 border-blue-700 rounded"
                    href="/settingsTest"
                  >
                    Modify
                  </Link>
                  <button
                    className="mt-5 px-3 py-2 font-bold text-white text-xs bg-red-700 active:bg-red-600 border-2 border-red-700 rounded"
                    isactive={isactive}
                    onClick={handleActive}
                  >
                    Delete
                  </button>
                </div>

                {isactive && (
                  <div className="w-full h-screen bg-black/20 absolute top-0 left-0 p-3 rounded-xl flex flex-col items-center">
                    <section className="flex flex-col items-center gap-5 h-64 w-64 mt-[150px] pt-10 bg-black bg-opacity-60 rounded-2xl">
                      <ExclamationTriangleIcon className="text-white w-20 h-20" />
                      <p className="text-white font-bold text-2xl pb-2 text-center">
                        ARE YOU SURE !?
                      </p>
                      <div className="flex gap-5 mb-3">
                        <button
                          className="mt-5 px-3 py-2 font-bold text-white text-xs bg-blue-700 active:bg-blue-600 border-2 border-blue-700 rounded"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                        <button
                          className="mt-5 px-3 py-2 font-bold text-white text-xs bg-red-700 active:bg-red-600 border-2 border-red-700 rounded"
                          onClick={handleDelete}
                        >
                          Confirm
                        </button>
                      </div>
                    </section>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Page>
  )
}
export default settings
