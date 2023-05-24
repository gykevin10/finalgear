import cors from "cors"
import express from "express"
import knex from "knex"
import config from "./config.js"
import makeUsersRoutes from "./routes/makeUsersRoutes.js"
import { Model } from "objection"
import makeSessionRoutes from "./routes/makeSessionRoutes.js"

const app = express()
const db = knex(config.db)

Model.knex(db)

app.use(cors())
app.use(express.json())

makeUsersRoutes({ app, db })
makeSessionRoutes({ app })

app.listen(config.server.port, () =>
  console.log(`Listening on : ${config.server.port}`)
)
