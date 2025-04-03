function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8
            return v.toString(16)
        }
    )
}

export const VIDEOS = [
    {
        id: uuidv4(),
        title: "Big Bunny",
        path: "",
        createdAt: new Date(),
    },
    {
        id: uuidv4(),
        title: "Electro",
        path: "",
        createdAt: new Date(),
    },
    {
        id: uuidv4(),
        title: "Rainy City",
        path: "",
        createdAt: new Date(),
    },
    {
        id: uuidv4(),
        title: "Sunny Sea",
        path: "",
        createdAt: new Date(),
    },
]
