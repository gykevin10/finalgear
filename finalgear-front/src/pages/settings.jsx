import Page from "@/components/Page"
import { ExclamationTriangleIcon, TrashIcon } from "@heroicons/react/24/solid"
import { useCallback, useEffect, useState } from "react"
import api from "@/services/api"
import { useRouter } from "next/router"
import { useAppContext } from "@/components/AppContext"
import ImageComponent from "@/components/ImageComponent"
import { AxiosError } from "axios"
import { Formik, Field, Form, ErrorMessage } from "formik"
import Loading from "@/components/Loading"
import AvatarSettingComponent from "@/components/AvatarSettingComponent"

const settings = () => {
  const [isActive, setIsActive] = useState(false)
  const {
    state: { session },
  } = useAppContext()
  const router = useRouter()
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState(null)
  const { setSession } = useAppContext()

  const handleIsActive = () => {
    setIsActive(!isActive)
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

  const handleSubmit = useCallback(
    async ({ email, displayName, password, newPassword }) => {
      setErrors([])
      if (!email | !displayName | !password | !newPassword) {
        return
      }

      try {
        const {
          data: { result },
        } = await api.patch(`/users/${userId}`, {
          email,
          displayName,
          password,
        })

        if (result.length !== 0) {
          setSession()
          router.push("/users/sign-in")

          return
        }
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error)

          return
        }

        setErrors(["Oops. Something went wrong, please try again."])
      }
    },
    [router]
  )

  useEffect(() => {
    ;(async () => {
      if (!session) {
        return <Loading />
      }
      const { data: result } = await api.get(`/own-user/${session.user.id}`)
      setUser(result)
    })()
  }, [session])

  if (!user) {
    return (
      <div>
        <div>404 user not found</div>
      </div>
    )
  }

  const initialValues = {
    displayName: user.displayName,
    email: user.email,
  }

  return (
    <Page>
      <div className="p-10 h-full bg-cover bg-no-repeat bg-center bg-[url('/background/FFXIV1.jpg')]">
        <h1 className="text-white text-2xl font-bold text-center">Settings</h1>
        {errors.length ? (
          <div className="rounded-lg border-4 border-red-600 mb-4 flex flex-col gap-4 p-4">
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
        <div className="flex w-full justify-around">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <div className="flex flex-col">
                <label className="text-white">DisplayName : </label>
                <Field
                  type="text"
                  id="displayName"
                  name="displayName"
                  className="border-2 border-black bg-gray-300 px-2 rounded"
                />

                <ErrorMessage
                  name="displayName"
                  component="small"
                  className="text-red-600"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white">Email : </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className=" border-2 border-black bg-gray-300 px-2 rounded"
                  placeholder="Entrer votre adresse Email"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-red-600"
                />
              </div>

              <label className="text-white">Pseudo Discord : </label>
              <div className="flex gap-x-2">
                <ImageComponent src="/icons/discord.png" className="w-7" />
                <Field
                  type="text"
                  id="pseudo discord"
                  name="pseudo discord"
                  className="w-80 border-2 border-black bg-gray-300 px-2 rounded"
                  placeholder="Entrer votre pseudo Discord"
                />
                <ErrorMessage
                  name="pseudo discord"
                  component="small"
                  className="text-red-600"
                />
              </div>

              <label className="form-check-label text-white">
                Pseudo FFXIV : 
              </label>
              <div className="flex gap-x-2">
                <ImageComponent src="/icons/FFXIVLOGO.png" className="w-7" />
                <Field
                  type="text"
                  id="pseudo ffxiv"
                  name="pseudo ffxiv"
                  className="w-80 border-2 border-black bg-gray-300 px-2 rounded"
                  placeholder="Entrer votre pseudo FFXIV"
                />
                <ErrorMessage
                  name="pseudo ffxiv"
                  component="small"
                  className="text-red-600"
                />
              </div>

              <div className="flex justify-center">
                <button
                  className="mt-5 px-3 py-2 font-bold text-white text-xs bg-blue-700 active:bg-blue-600 border-2 border-blue-700 rounded"
                  type="submit"
                >
                  Confirm
                </button>
              </div>

              <button
                className="flex gap-2 mt-5 px-3 py-2 font-bold text-white text-xs bg-red-700 active:bg-red-600 border-2 border-red-700 rounded"
                onClick={handleIsActive}
                type="button"
              >
                <TrashIcon className="w-6 h-6" />
                Delete account
              </button>

              {isActive && (
                <div className="w-full h-screen bg-black/20 absolute top-0 left-0 p-3 rounded-xl flex flex-col items-center">
                  <section className="flex flex-col items-center gap-5 h-64 w-64 mt-[150px] pt-10 bg-black bg-opacity-60 rounded-2xl">
                    <ExclamationTriangleIcon className="text-white w-20 h-20" />
                    <p className="text-white font-bold text-2xl pb-2 text-center">
                      ARE YOU SURE !?
                    </p>
                    <div className="flex gap-5 mb-3">
                      <button
                        className="mt-5 px-3 py-2 font-bold text-white text-xs bg-blue-700 active:bg-blue-600 border-2 border-blue-700 rounded"
                        onClick={handleIsActive}
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
            </Form>
          </Formik>
          <div>
            <div className="text-white flex flex-col">
              <AvatarSettingComponent userId={user.id} />
              <div className="mb-1">Password :</div>
              <button className="bg-white rounded text-black px-3 py-2 font-bold text-xs">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
export default settings
