const express = require('express')
class V2scarRouter {
    constructor(service) {
        this.service = service
    }
    router() {
        const router = express.Router()
        router.get("/", this.allUserInfo.bind(this))
        router.post("/", this.updateStats.bind(this))
        return router
    }
    async allUserInfo(req, res) {

        let resGet = await this.service.getAllUser()
        console.log("resGet", resGet)
        res.json({ Configs: resGet })
    }
    async updateStats(req, res) {

    }
}
module.exports = V2scarRouter