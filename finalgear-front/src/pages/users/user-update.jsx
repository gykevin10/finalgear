import React, { useCallback, useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useRouter } from "next/router.js"
import api from "@/services/api.js"
import { AxiosError } from "axios"
import { useAppContext } from "@/components/AppContext"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"
import Page from "@/components/Page"
import FormField from "@/components/FormField"
import ImageComponent from "@/components/ImageComponent"

const initialValues = {
  avatar: "",
  avatarFile: "",
  displayName: "",
  email: "",
  password: "",
  newPassword: "",
}
const userUpdate = () => {
  const {
    state: { session },
  } = useAppContext()
  const { setSession } = useAppContext()

  const router = useRouter()
  const [errors, setErrors] = useState([])
  const [visible, setVisiblity] = useState(false)

  const handleSubmit = useCallback(
    async ({ email, displayName, password, newPassword, avatarFile }) => {
      setErrors([])
      const result = await api.post(
        "/users/avatar",
        { avatar: avatarFile },
        { headers: { "Content-Type": "multipart/form-data" } }
      )

      console.log(result)
      const userId = session.user.id

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

  const handleVisionOff = () => {
    setVisiblity(true)
  }
  const handleVisionOn = () => {
    setVisiblity(false)
  }

  return (
    <Page>
      <div className="p-10 h-full bg-cover bg-no-repeat bg-[url('/background/FFXIV1.jpg')]">
        <h1 className="text-2xl font-bold text-white text-center">
          Update Informations
        </h1>
        {errors.length ? (
          <div className="rounded-lg border-4 border-red-600 mb-4 flex flex-col gap-4 p-4">
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}

        <div className="flex p-2 m-2 w-max gap-x-8">
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <div className="bg-green-600 mb-5">
                <FormField name="avatar" type="file" />
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="mt-5 px-3 py-2 font-bold text-white text-xs bg-emerald-700 active:bg-emerald-600 border-2 border-emerald-700 rounded"
                  >
                    Save
                  </button>
                </div>
              </div>

              <div className="flex flex-col w-80">
                <div className="flex flex-col">
                  <label className="text-white">Email : </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-80 border-2 border-black bg-gray-300 px-2 rounded"
                    placeholder="Entrer votre adresse Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white">DisplayName : </label>
                  <Field
                    type="text"
                    id="displayName"
                    name="displayName"
                    className="w-80 border-2 border-black bg-gray-300 px-2 rounded"
                    placeholder="Entrer votre DisplayName"
                  />
                  <ErrorMessage
                    name="displayName"
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
                  <ImageComponent src="/images/FFXIVLOGO.png" className="w-7" />
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
              </div>

              <div className="m-3 flex justify-center">
                <button
                  type="submit"
                  className="mt-5 px-3 py-2 font-bold text-white text-xs bg-blue-700 active:bg-blue-600 border-2 border-blue-700 rounded"
                >
                  Confirm
                </button>
              </div>
            </Form>
          </Formik>

          <div className="flex">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <div className="flex flex-col">
                  <label className="text-white">Password : </label>
                  <div className="flex gap-x-2">
                    <Field
                      type={visible ? "text" : "password"}
                      id="password"
                      name="password"
                      className="w-80 border-2 border-black bg-gray-300 px-2 rounded"
                      placeholder="Entrer votre Password"
                    />
                    {visible ? (
                      <span onClick={handleVisionOn}>
                        <EyeIcon className="w-6 h-6 text-white hover:cursor-pointer" />
                      </span>
                    ) : (
                      <span onClick={handleVisionOff}>
                        <EyeSlashIcon className="text-white w-6 h-6 hover:cursor-pointer" />
                      </span>
                    )}
                  </div>
                  <ErrorMessage
                    name="password"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <label className="text-white">New Password : </label>
                <div className="flex gap-x-2">
                  <Field
                    type={visible ? "text" : "newPassword"}
                    id="newPassword"
                    name="newPassword"
                    className="w-80 border-2 border-black bg-gray-300 px-2 rounded"
                    placeholder="Entrer votre nouveau Mot de passe"
                  />
                  {visible ? (
                    <span onClick={handleVisionOn}>
                      <EyeIcon className="w-6 h-6 text-white hover:cursor-pointer" />
                    </span>
                  ) : (
                    <span onClick={handleVisionOff}>
                      <EyeSlashIcon className="text-white w-6 h-6 hover:cursor-pointer" />
                    </span>
                  )}
                </div>
                <ErrorMessage
                  name="newPassword"
                  component="small"
                  className="text-red-600"
                />

                <div className="flex gap-3 my-3 justify-center">
                  <button
                    type="submit"
                    className="mt-5 px-3 py-2 font-bold text-white text-xs bg-blue-700 active:bg-blue-600 border-2 border-blue-700 rounded"
                  >
                    Confirm
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default userUpdate
