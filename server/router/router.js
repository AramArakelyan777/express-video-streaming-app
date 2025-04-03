import { Router } from "express"
import multer from "multer"
import { VIDEOS, saveVideosToFile } from "../db/videoData.js"

const router = Router()

function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            const r = (Math.random() * 16) | 0
            const v = c === "x" ? r : (r & 0x3) | 0x8
            return v.toString(16)
        }
    )
}

const uuid = uuidv4()

const storage = multer.diskStorage({
    destination: "db/uploads/",
    filename: (req, file, callback) => {
        callback(null, `${uuid}_${file.originalname}`)
    },
})
const upload = multer({ storage })

router.get("/videos", (req, res) => {
    res.status(200).json(VIDEOS)
})

router.get("/videos/:video_id", (req, res) => {
    const video = VIDEOS.find((v) => v.id === req.params.video_id)
    if (!video) return res.status(404).json({ message: "Video not found" })
    res.status(200).json(video)
})

router.post("/add-a-video", upload.single("video"), (req, res) => {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" })
    if (!req.body.title)
        return res.status(400).json({ message: "No title provided" })

    const newVideo = {
        id: uuid,
        title: req.body.title,
        path: `uploads/${req.file.filename}`,
        createdAt: new Date(),
    }
    VIDEOS.push(newVideo)
    saveVideosToFile()

    res.status(201).json(newVideo)
})

export default router
