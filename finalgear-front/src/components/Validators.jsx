import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  nickName: Yup.string()
    .min(2, "Trop petit !")
    .max(12, "Trop long !")
    .required("champ obligatoire"),
  email: Yup.string()
    .email("Email invalide !")
    .required("L'email est obligatoire !"),
  password: Yup.string()
    .required("Le mot de passe est obligatoire !")
    .min(8, "le mot de passe doit contenir au minimum 8 caractères")
    .max(50, "le Mot de passe ne peut pas contenir plus de 50 caractères"),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "les conditions d'inscription sont obligatoires"
  ),
})

export default validationSchema
