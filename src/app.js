import express from "express"
import helmetConfig from "./config/helmet.config.js"
import corsConfig from "./config/cors.config.js"
import router from "./routes/index.js"

const app = express()

app.use(helmetConfig)
app.use(corsConfig)
app.use(express.json())
app.use(router)

export default app