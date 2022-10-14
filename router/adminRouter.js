const express = require('express')

class AdminRouter {
    constructor(service) {
        this.service = service
    }
    router() {
        const router = express.Router();
        router.get("/login", this.login.bind(this))
        return router
    }
    async login(req, res) {

    }
}

module.exports = AdminRouter