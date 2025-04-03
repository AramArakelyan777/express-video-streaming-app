import { makeRequest } from "./makeRequest"

export async function getVideos() {
    return makeRequest("/videos")
}

export async function getAVideo(video_id) {
    return makeRequest(`/videos/${video_id}`)
}
