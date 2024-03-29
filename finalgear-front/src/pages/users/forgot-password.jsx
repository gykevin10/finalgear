import Link from "@/components/Link"
import Page from "@/components/Page"
import api from "@/services/api"
import classNames from "classnames"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useCallback, useState } from "react"

const initialValues = {
  email: "",
}
const forgotPassword = () => {
  const [isactive, setIsactive] = useState(false)
  const handleSubmit = useCallback(async ({ email }) => {
    if (!email) {
      return
    }

    setIsactive(!isactive)
    const {
      data: { result },
    } = await api.post("/forgot-password", { email })
  })

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
                {({ isSubmitting, isValid }) => (
                  <Form className="flex flex-col items-center">
                    <div className="flex">
                      <label className="text-white">Email : </label>
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
                      <button
                        disabled={!isValid || isSubmitting}
                        className={
                          (classNames(
                            "mt-5 px-3 py-2 font-bold text-white text-xs  active:bg-red-600 border-2 border-red-700 rounded"
                          ),
                          "disabled:bg-red-700")
                        }
                      >
                        Confirm
                      </button>
                    </div>
                  </Form>
                )}
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
export default forgotPassword
