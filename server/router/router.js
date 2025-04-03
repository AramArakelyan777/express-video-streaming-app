import { Router } from "express"
import { VIDEOS } from "../db/videoData.js"

const router = Router()

router.get("/videos", (req, res) => {
    try {
        res.status(200).send(VIDEOS)
    } catch (error) {
        res.status(500).send({ message: "The video list is empty." })
    }
})

router.get("/videos/:video_id", (req, res) => {
    try {
        const video_id = req.params.video_id
        res.status(200).send(VIDEOS.filter((video) => video.id === video_id))
    } catch (error) {
        res.status(404).send({ message: "Video is not found." })
    }
})

export default router
