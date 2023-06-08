import express from "express"
import validate from "../middlewares/validate.js"
import { validateEmailOrUsername, validatePassword } from "../validators.js"
import jsonwebtoken from "jsonwebtoken"
import config from "../config.js"
import User from "../db/models/User.js"
import checkPassword from "../checkPassword.js"

const makeSessionRoutes = ({ app, db }) => {
  app.post(
    "/sign-in",
    express.json(),
    validate({
      emailOrUsername: validateEmailOrUsername.required(),
      password: validatePassword.required(),
    }),
    async (req, res) => {
      const { emailOrUsername, password } = req.body

      if (!emailOrUsername) {
        res.status(401).send({ error: ["Invalid credentials."] })

        return
      }

      const user = await User.query()
        .where({
          email: emailOrUsername,
        })
        .orWhere({ username: emailOrUsername })

      if (!user) {
        res.status(401).send({ error: ["Invalid credentials."] })

        return
      }

      if (
        user[0].passwordHash !== checkPassword(password, user[0].passwordSalt)
      ) {
        res.status(401).send({ error: ["Invalid credentials."] })
      }

      const jwt = jsonwebtoken.sign(
        {
          session: {
            user: {
              id: user[0].id,
              username: user[0].username,
              displayName: user[0].displayName,
            },
          },
        },
        config.security.jwt.secret,
        { expiresIn: config.security.jwt.expiresIn }
      )

      res.send({ result: [{ jwt }] })
    }
  )

  // QUESTION POUR ALIX
  // app.patch(
  //   "/reset-password",
  //   validate({
  //     body: {
  //       password: validatePassword.required(),
  //     },
  //   }),
  //   async (req, res) => {
  //     const { password } = req.body
  //     const resetPassword = await User.$query()
  //       .patch({ password })
  //       .returning("*")

  //     res.send({ result: resetPassword })
  //   }
  // )

  // app.get(
  //   "/forgot-password",
  //   validate({
  //     body: {
  //       email: validateEmail.required(),
  //     },
  //   }),
  //   async (req, res) => {
  //     const { email } = req.body

  //     if (!email) {
  //       res.status(401).send({ error: ["Enter your Email"] })

  //       return
  //     }

  //     const user = await User.query().findOne({
  //       email: email,
  //     })

  //     if (!user) {
  //       send401(res)

  //       return
  //     }

  //     res.send({ user })
  //   }
  // )
}

export default makeSessionRoutes
