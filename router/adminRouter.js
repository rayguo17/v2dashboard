const express = require('express')
const { adminId } = require('../auth')
const jwt = require('jsonwebtoken')

class AdminRouter {
    constructor(service) {
        this.service = service
    }
    router() {
        const router = express.Router();
        router.post("/login", this.login.bind(this))
        return router
    }
    async login(req, res) {
        if (req.body.username) {
            let username = req.body.username
            if (username !== adminId) {
                res.sendStatus(401)
                return
            }
            let payload = {
                id: username
            }
            let token = jwt.sign(payload, "supersecret")
            res.json({ token: token })
        }
    }
}

module.exports = AdminRouter