import React, { useCallback, useState } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
// import Link from "@/components/Link.jsx"
import { useRouter } from "next/router.js"
import api from "@/services/api.js"
import { AxiosError } from "axios"
import validationSchema from "@/components/Validateur.jsx"
import ImageSrc from "@/components/ImageSrc"

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
}

const UserPatch = () => {
  const router = useRouter()
  const [errors, setErrors] = useState([])
  const handleSubmit = useCallback(
    async ({ password, email }) => {
      setErrors([])

      try {
        const {
          data: { result },
        } = await api.patch(`/users/password/${email}`, {
          password,
        })

        if (result.length !== 0) {
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

  return (
    <div className="h-screen">
      <div className=" h-full flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-500  rounded-md border-2 border-indigo-600 ">
        <div className=" py-10">
          <ImageSrc src="/images/logo/F1.png" className="w-48 h-15" />
        </div>
        <div>
          <div className="text-center">
            <h1 className="text-center text-4xl font-bold mb-5  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 ">
              Ubdate password
            </h1>
          </div>
          {errors.length ? (
            <div className="rounded-lg border-4 border-red-600 mb-4 flex flex-col gap-4 p-4">
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label>Confirm your email :</label>
                <Field
                  type="email"
                  name="email"
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-red-600"
                />
              </div>
              <div className="flex flex-col">
                <label>New password :</label>
                <Field
                  type="password"
                  name="password"
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="password"
                  component="small"
                  className="text-red-600"
                />
              </div>

              <div className="flex flex-col">
                <label>Confirm new password :</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="border-2 border-black px-2 rounded"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="small"
                  className="text-red-600"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="p-2 w-[75%] text font-bold text-white bg-blue-500 active:bg-blue-400 rounded "
                >
                  Confirm
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default UserPatch
