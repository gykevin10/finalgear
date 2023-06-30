import Page from "@/components/Page"
import api from "@/services/api"
import classNames from "classnames"
import { Field, Form, Formik } from "formik"
import { useRouter } from "next/router"
import { AxiosError } from "axios"
import { useCallback, useState } from "react"
import * as Yup from "yup"
import Link from "next/link"

const initialValues = { newPassword: "" }
const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8)
    .matches(/\W/, "Password must contain at least a special character")
    .label("Password"),
})

const resetPassword = () => {
  const router = useRouter()
  const id = router.query.id
  const [errors, setErrors] = useState([])
  const [statu, setStatu] = useState("")

  const handleSubmit = useCallback(
    async ({ newPassword }) => {
      setErrors([])
      try {
        const {
          data: { result },
        } = await api.patch("/reset-password", { id, newPassword })

        router.push("/users/sign-in")
      } catch (err) {
        if (err instanceof AxiosError && err.response?.data?.error) {
          setErrors(err.response.data.error)
          setStatu(err.response.data.statu)

          return
        }

        setErrors(["Oops. Something went wrong, please try again."])
      }
    },
    [id]
  )

  return (
    <Page>
      <div className="h-full flex flex-col items-center bg-cover bg-no-repeat bg-center bg-[url('/background/FFXVI1.jpeg')]">
        <ul
          className={classNames(
            `mx-auto mt-4 w-1/2 rounded-lg border-2 border-red-600 bg-red-500/30`,
            ` ${errors[0] ? "" : "hidden"}`
          )}
        >
          {errors.map((error, i) => (
            <li key={i} className="p-1 text-center text-white">
              🛑 {error}
            </li>
          ))}
        </ul>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="flex flex-col items-center bg-gray-400 mt-4 mx-auto w-1/4 rounded-lg border-2 border-black ">
              <div className="flex flex-col gap-2 my-4">
                <h1 className="text-lg">New Password :</h1>
                <Field
                  className="border-2"
                  type="input"
                  id="newPassword"
                  name="newPassword"
                />
                <button
                  type="submit"
                  className={classNames(
                    "border-2 rounded-lg border-black bg-green-400",
                    "disabled:bg-red-600"
                  )}
                  disabled={!isValid || isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
        {statu === 404 ? (
          <button className="text-black bg-gray-400 border-2 border-gray-600 rounded-lg mt-4 p-2">
            <Link href="/users/sign-in">Go to sign-in.</Link>
          </button>
        ) : (
          ""
        )}
      </div>
    </Page>
  )
}

export default resetPassword
