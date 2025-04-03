import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import router from "./router/router.js"
import errorMiddleware from "./middlewares/errorMiddleware.js"

dotenv.config()

const app = express()

const PORT = process.env.SERVER_PORT

app.use(errorMiddleware)
app.use(express.json())
app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
    })
)
app.use("/api", router)

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}.`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
