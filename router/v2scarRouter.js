const express = require('express')
class V2scarRouter {
    constructor(service) {
        this.service = service
    }
    router() {
        const router = express.Router()
        router.get("/userInfo", this.allUserInfo.bind(this))
        router.post("/stats", this.updateStats.bind(this))
        return router
    }
    async allUserInfo(req, res) {

    }
    async updateStats(req, res) {

    }
}
module.exports = V2scarRouter