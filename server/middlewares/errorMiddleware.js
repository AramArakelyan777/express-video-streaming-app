export default function errorMiddleware(err, req, res, next) {
    console.log(err.stack)
    res.status(500).send({ message: "Something went wrong..." })
}
