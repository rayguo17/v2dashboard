const express = require("express")

class UserRouter {
    constructor(service) {
        this.service = service
    }
    router() {
        const router = express.Router()
        router.post('/uiser', this.addUser.bind(this))
        router.put('/user', this.updateUser.bind(this))
        router.delete("/user", this.deleteUser.bind(this))
        return router
    }
    async addUser(req, res) {

    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {

    }
}

module.exports = UserRouter