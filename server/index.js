import dotenv from "dotenv"
import express from "express"
import cors from "cors"

dotenv.config()

const app = express()

const PORT = process.env.SERVER_PORT

app.use(express.json())
app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
    })
)

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
