import { getAVideo } from "../service/videoService"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router"

export function Video() {
    const [videoArr, setVideo] = useState([])
    const { pathname } = useLocation()

    const routes = pathname.split("/")

    useEffect(() => {
        getAVideo(routes[routes.length - 1]).then(setVideo)
    }, [])

    const video = videoArr[0]

    return (
        <React.Fragment>
            <h1>{video?.title}</h1>
            <video controls={true}>
                <source src={video?.path} type="video/mp4" />
            </video>
            <p>Created at: {video?.createdAt}</p>
        </React.Fragment>
    )
}
