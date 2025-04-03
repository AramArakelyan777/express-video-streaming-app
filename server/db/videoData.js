import fs from "fs"
import path from "path"

const FILE_PATH = path.resolve("db/videoData.json")

export let VIDEOS = []

try {
    VIDEOS = JSON.parse(fs.readFileSync(FILE_PATH, { encoding: "utf-8" }))
} catch (error) {
    console.error("Error reading video data:", error)
}

export function saveVideosToFile() {
    fs.writeFileSync(FILE_PATH, JSON.stringify(VIDEOS, null, 4))
}
