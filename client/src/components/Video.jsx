import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import { getAVideo, deleteVideo } from "../service/videoService"

export function Video() {
    const [video, setVideo] = useState(null)
    const { pathname } = useLocation()
    const videoId = pathname.split("/").pop()
    const navigate = useNavigate()

    useEffect(() => {
        getAVideo(videoId).then(setVideo)
    }, [videoId])

    return (
        <div>
            <h1>{video?.title}</h1>
            {video && (
                <React.Fragment>
                    <video width={500} height={300} controls key={video.id}>
                        <source
                            src={`${import.meta.env.VITE_SERVER_URL.replace(
                                "api",
                                ""
                            )}${video.path}`}
                            type="video/mp4"
                        />
                    </video>
                </React.Fragment>
            )}
            <p>Created at: {video?.createdAt}</p>
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
