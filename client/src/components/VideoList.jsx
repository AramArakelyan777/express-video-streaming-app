import { getVideos } from "../service/videoService"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"

export function VideoList() {
    const [videos, setVideos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getVideos().then(setVideos)
    }, [])

    return (
        <React.Fragment>
            <h1>The list of all videos</h1>
            {videos.map((video) => (
                <div key={video.id}>
                    <a
                        onClick={() => {
                            navigate(video.id)
                        }}
                    >
                        {video.title}
                    </a>
                </div>
            ))}
        </React.Fragment>
    )
}
