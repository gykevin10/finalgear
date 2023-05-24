import * as Yup from "yup"

export const validateUsername = Yup.string()
  .min(2)
  .max(15)
  .matches(
    /^[a-z][a-z0-9._]*/,
    "Username must contain only letters, numbers, '.' and '_'"
  )
  .trim()
  .label("Username")

export const validateDisplayName = Yup.string()
  .min(1)
  .max(20)
  .trim()
  .matches(/[^\n\r\u00a0]/)
  .label("Display Name")

export const validateEmail = Yup.string().email("Email invalide !")

export const validatePassword = Yup.string()
  .min(8)
  .matches(/\W/, "Password must contain at least a special character")
  .label("Password")

export const validateAcceptTerms = Yup.bool().oneOf(
  [true],
  "les conditions d'inscription sont obligatoires"
)
