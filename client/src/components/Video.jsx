import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import {
    getAVideo,
    deleteVideo,
    updateVideoTitle,
} from "../service/videoService"

export function Video() {
    const [video, setVideo] = useState(null)
    const [newTitle, setNewTitle] = useState("")
    const [statusMessage, setStatusMessage] = useState("")
    const [statusType, setStatusType] = useState("")
    const { pathname } = useLocation()
    const videoId = pathname.split("/").pop()
    const navigate = useNavigate()

    useEffect(() => {
        getAVideo(videoId).then((data) => {
            setVideo(data)
            setNewTitle(data.title)
        })
    }, [videoId])

    const handleUpdateTitle = async () => {
        if (!newTitle.trim()) {
            setStatusMessage("Title cannot be empty!")
            setStatusType("error")
            return
        }

        try {
            await updateVideoTitle(videoId, newTitle)
            setVideo((prev) => ({ ...prev, title: newTitle }))
            setStatusMessage("Title updated successfully!")
            setStatusType("success")
        } catch (error) {
            setStatusMessage("Failed to update title: " + error)
            setStatusType("error")
        }
    }

    const getVideoSource = (path) => {
        return path.startsWith("http")
            ? path
            : `${import.meta.env.VITE_SERVER_URL.replace("api", "")}${path}`
    }

    return (
        <div>
            <h1>{video?.title}</h1>
            {video && (
                <>
                    <video width={500} height={300} controls key={video.id}>
                        <source
                            src={getVideoSource(video.path)}
                            type="video/mp4"
                        />
                    </video>
                </>
            )}
            <p>Created at: {video?.createdAt}</p>

            <div>
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <button onClick={handleUpdateTitle}>Update Title</button>
            </div>

            {statusMessage && (
                <p
                    style={{
                        color: statusType === "success" ? "green" : "red",
                        fontWeight: "bold",
                        marginTop: "10px",
                    }}
                >
                    {statusMessage}
                </p>
            )}

            <button
                onClick={() => {
                    deleteVideo(video?.id)
                    navigate("/videos")
                }}
            >
                Delete this video
            </button>
        </div>
    )
}
