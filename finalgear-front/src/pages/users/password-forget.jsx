import Link from "@/components/Link"
import Page from "@/components/Page"
import api from "@/services/api"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useState } from "react"

const initialValues = {
  email: "",
}
const PasswordForget = () => {
  const [isactive, setIsactive] = useState(false)
  const handleSubmit = async ({ email }) => {
    if (!email) {
      return
    }

    setIsactive(true)
    const {
      data: { result },
    } = await api.get(`/users/${email}`)

    if (result.length !== 0) {
      try {
        const { data } = await api.post(`/api/email`, {
          email,
        })
        console.log("msg sensed")
      } catch (err) {
        console.log("errorrrrrr")
      }
    }
  }

  return (
    <Page>
      <div className="h-full flex flex-col">
        <div className="grow flex flex-col items-center bg-cover bg-no-repeat bg-center bg-[url('/background/clive.jpeg')]">
          <h1 className="mb-5 text-center text-4xl text-white font-bold underline">
            Modifier votre mot de passe
          </h1>
          <div className="p-4 bg-black bg-opacity-40 rounded-2xl">
            {!isactive && (
              <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className="flex flex-col items-center">
                  <div className="flex">
                    <label className="text-white">Email : </label>
                    <Field
                      type="input"
                      id="email"
                      name="email"
                      className="border-2 border-black px-2 rounded"
                      placeholder="xxxx@xxxx.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="small"
                      className="text-red-600"
                    />
                  </div>
                  <div className="flex gap-10">
                    <Link
                      className="mt-5 px-3 py-2 font-bold text-white text-xs bg-blue-700 active:bg-blue-600 border-2 border-blue-700 rounded"
                      href="/users/sign-in"
                    >
                      Return
                    </Link>
                    <button className="mt-5 px-3 py-2 font-bold text-white text-xs bg-red-700 active:bg-red-600 border-2 border-red-700 rounded">
                      Confirm
                    </button>
                  </div>
                </Form>
              </Formik>
            )}

            {isactive && (
              <div className="flex flex-col items-center">
                <p className="text-white text-center w-56">
                  Merci ! Si vous possédez un compte lié à cette adresse, nous
                  vous enverrons un mail avec un lien de réinitialisation de
                  votre mot de passe.
                </p>
                <div className="flex">
                  <Link
                    className="mt-5 px-3 py-2 font-bold text-white text-xs bg-blue-700 active:bg-blue-600 border-2 border-blue-700 rounded"
                    href="/users/sign-in"
                  >
                    Return
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Page>
  )
}
export default PasswordForget
