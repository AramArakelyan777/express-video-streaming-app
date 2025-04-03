import React from "react"
import { Routes, Route } from "react-router"
import { Welcome } from "./components/Welcome"
import { VideoList } from "./components/VideoList"
import { Video } from "./components/Video"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/videos" element={<VideoList />} />
            <Route path="/videos/:video_id" element={<Video />} />
        </Routes>
    )
}

export default App
