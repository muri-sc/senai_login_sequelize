import express from "express"
import helmetConfig from "./config/helmet.config.js"
import cors from "cors"
import router from "./routes/index.js"

const app = express()

app.use(helmetConfig)
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(router)

export default app