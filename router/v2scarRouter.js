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
        console.log(req.body)
        //safe the reqbody
        req.body.user_traffics.map(async e => {
            let stats = await this.service.storeStats(e)
            console.log(stats)
        })

        res.sendStatus(200)
    }
}
module.exports = V2scarRouter