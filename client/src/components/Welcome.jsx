import React from "react"
import { useNavigate } from "react-router"

export function Welcome() {
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <h1>Video streaming app</h1>
            <p>
                Welcome to this app! Here you can watch some videos, also create
                or delete them.
            </p>
            <button
                onClick={() => {
                    navigate("/videos")
                }}
            >
                Open the list of all videos
            </button>
        </React.Fragment>
    )
}
