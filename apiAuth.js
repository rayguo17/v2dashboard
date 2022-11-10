module.exports = (req, res, next) => {
    console.log(req.headers)
    if (!req.headers.token) {
        res.status(403).send("no token provided")
    } else {
        next()
    }
}