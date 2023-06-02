import Button from "@/components/Button"
import Footer from "@/components/Footer"
import ImageSrc from "@/components/ImageSrc"
import Link from "@/components/Link"
import api from "@/services/api"
import { Field, Form, Formik } from "formik"
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
    <div className="h-screen flex flex-col">
      <div
        className=" grow flex flex-col items-center bg-gradient-to-b from-gray-100
       to-gray-500  rounded-md border-2 border-indigo-600 "
      >
        <div className="w-64 h-32 flex items-center justify-center">
          <ImageSrc src="/images/logo/F1.png" className="w-48 h-15" />
        </div>
        <div
          className=" md:w-[75%] bg-white p-10 mt-20 text-center rounded-xl shadow-lg
         shadow-white"
        >
          {!isactive && (
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form className="flex flex-col items-center gap-10">
                <p className="text-3xl font-bold">inserer votre email</p>
                <Field type="email" name="email" placeholder="email" />
                <div className="flex gap-10 items-center justify-around">
                  <Link href="/users/sign-in">Return</Link>
                  <Button type="submit">Checked</Button>
                </div>
              </Form>
            </Formik>
          )}

          {isactive && (
            <div className=" flex flex-col gap-10">
              <p>
                Merci ! Si vous avez un compte avec cette adresse, nous vous
                enverrons un e-mail avec un lien pour réinitialiser votre mot de
                passe
              </p>
              <Link
                className="bg-blue-600 p-2 rounded-xl  active:bg-blue-300"
                href="/users/sign-in"
              >
                Return
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default PasswordForget
