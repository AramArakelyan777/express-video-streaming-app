import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import { getAVideo } from "../service/videoService"

export function Video() {
    const [video, setVideo] = useState(null)
    const { pathname } = useLocation()
    const videoId = pathname.split("/").pop()

    useEffect(() => {
        getAVideo(videoId).then(setVideo)
    }, [videoId])

    return (
        <div>
            <h1>{video?.title}</h1>
            {video && (
                <video width={500} height={300} controls key={video?.id}>
                    <source
                        src={`${import.meta.env.VITE_SERVER_URL.replace(
                            "api",
                            ""
                        )}${video?.path}`}
                        type="video/mp4"
                    />
                </video>
            )}
            <p>Created at: {video?.createdAt}</p>
        </div>
    )
}
