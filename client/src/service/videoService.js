import { makeRequest } from "./makeRequest"

export async function getVideos() {
    return makeRequest("/videos")
}

export async function getAVideo(video_id) {
    return makeRequest(`/videos/${video_id}`)
}

export async function uploadVideo(formData) {
    return makeRequest("/add-a-video", {
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
    })
}

export async function deleteVideo(video_id) {
    return makeRequest(`/videos/${video_id}`, {
        method: "DELETE",
    })
}

export async function updateVideoTitle(video_id, newTitle) {
    return makeRequest(`/videos/${video_id}`, {
        method: "PUT",
        data: { title: newTitle },
        headers: { "Content-Type": "application/json" },
    })
}
