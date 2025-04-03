import React, { useEffect, useState } from "react"
import { getVideos, uploadVideo } from "../service/videoService"

export function VideoList() {
    const [videos, setVideos] = useState([])
    const [title, setTitle] = useState("")
    const [file, setFile] = useState(null)

    useEffect(() => {
        getVideos().then(setVideos)
    }, [])

    const handleUpload = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", title)
        formData.append("video", file)

        await uploadVideo(formData)
        getVideos().then(setVideos)
    }
    return (
        <React.Fragment>
            <h1>The list of all videos</h1>
            <form onSubmit={handleUpload}>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="file"
                    accept="video/mp4"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button type="submit">Upload</button>
            </form>

            {videos.map((video) => (
                <div key={video.id}>
                    <a href={`/videos/${video.id}`}>{video.title}</a>
                </div>
            ))}
        </React.Fragment>
    )
}
