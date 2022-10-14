module.exports = (req, res, next) => {
    if (!req.headers.token) {
        res.status(403).send("no token provided")
    } else {
        next()
    }
}