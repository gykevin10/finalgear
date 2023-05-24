import { Formik, Field, Form, ErrorMessage } from "formik"
import { useRouter } from "next/router"
import Page from "../components/Page"
import { useCallback, useState } from "react"
import { AxiosError } from "axios"
import * as yup from "yup"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"
import api from "@/services/api"
import {
  validateAcceptTerms,
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUsername,
} from "@/validators"

const initialValues = {
  username: "",
  displayName: "",
  email: "",
  password: "",
  acceptTerms: false,
}

const validationSchema = yup.object().shape({
  email: validateEmail.required(),
  displayName: validateDisplayName.required(),
  username: validateUsername.required(),
  password: validatePassword.required(),
  acceptTerms: validateAcceptTerms.required(),
})

const signUp = () => {
  const router = useRouter()
  const [errors, setErrors] = useState([])
  const [visible, setVisiblity] = useState(false)

  const handleVisionOff = () => {
    setVisiblity(true)
  }
  const handleVesionOn = () => {
    setVisiblity(false)
  }
  const handleCGU = () => {
    router.push("/termsOfUse")
  }
  const handleSubmit = useCallback(
    async ({ email, username, displayName, password }) => {
      setErrors([])

      try {
        const {
          data: { count },
        } = await api.post("/users", { email, username, displayName, password })

        if (count) {
          router.push("/sign-in")

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
  const handleConnexion = () => {
    router.push("/sign-in")
  }

  return (
    <Page>
      <div className="h-screen flex flex-col items-center border-2 border-black bg-cover bg-no-repeat bg-center bg-[url('/background/FFXVI3.jpeg')]">
        <div>
          <h1 className="text-white text-center text-4xl font-bold mb-5 underline">
            Inscription
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, resetForm }) => (
              <Form>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <label className="text-white">Username :</label>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      className="border-2 border-black px-2 rounded"
                    />
                    <ErrorMessage
                      name="username"
                      component="small"
                      className="text-red-600"
                    />
                  </div>
                  <label className="text-white">DisplayName :</label>
                  <Field
                    type="text"
                    id="displayName"
                    name="displayName"
                    className="border-2 border-black px-2 rounded"
                  />
                  <ErrorMessage
                    name="displayName"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white">Email :</label>
                  <Field
                    type="email"
                    id="email"
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
                  <label className="text-white">Mot de passe :</label>
                  <div className="flex items-center justify-between">
                    <Field
                      type={visible ? "text" : "password"}
                      id="password"
                      name="password"
                      className="border-2 border-black px-2 rounded"
                    />
                    {visible ? (
                      <span onClick={handleVesionOn}>
                        <EyeIcon className="w-6 h-6 bg-white hover:cursor-pointer" />
                      </span>
                    ) : (
                      <span onClick={handleVisionOff}>
                        <EyeSlashIcon className="w-6 h-6 bg-white hover:cursor-pointer" />
                      </span>
                    )}
                  </div>
                  <ErrorMessage
                    name="password"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <div className="flex flex-col">
                  <div>
                    <Field
                      name="acceptTerms"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label text-white">
                      J'ai lu et j'accepte 
                      <button
                        className="underline decoration-solid"
                        onClick={handleCGU}
                      >
                        les Conditions
                      </button>
                    </label>
                  </div>
                  <ErrorMessage
                    name="acceptTerms"
                    component="small"
                    className="text-red-600"
                  />
                </div>

                <div className="flex justify-between mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    onClick={handleSubmit}
                    className="p-1 text-white font-bold border-black border-2"
                  >
                    S'inscrire
                  </button>
                  <button
                    onClick={handleConnexion}
                    className="p-1 text-white font-bold border-black border-2"
                  >
                    Connexion
                  </button>
                </div>
                {errors.length ? (
                  <div className="rounded-lg border-4 border-red-600 text-white mb-4 flex flex-col gap-4 p-4">
                    {errors.map((error) => (
                      <p key={error}>{error}</p>
                    ))}
                  </div>
                ) : null}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Page>
  )
}

export default signUp
