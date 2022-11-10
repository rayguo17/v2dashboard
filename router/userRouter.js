const express = require("express")
const crypto = require("crypto")
const { createUser } = require("../util/user")
const { errorMsg } = require("../util/errorMsg")

class UserRouter {
    constructor(service) {
        this.service = service
    }
    router() {
        const router = express.Router()
        router.get('/all', this.getAllUser.bind(this))
        router.post('/', this.addUser.bind(this))
        router.put('/', this.updateUser.bind(this))
        router.delete("/:id", this.deleteUser.bind(this))
        return router
    }
    async addUser(req, res) {
        console.log(req.body)
        if (!req.body.email) {
            res.sendStatus(303)
            return
        }
        let newUser = createUser(req.body.email)
        try {
            let resAdd = await this.service.createUser(newUser)
            console.log(resAdd)
            newUser.user_id = resAdd[0].user_id
            res.json(newUser)
        } catch (e) {
            console.error(e)
            let err = errorMsg("email already exist!", 1001)
            res.json(err)
        }

        //res.sendStatus(200)
    }
    async updateUser(req, res) {

    }
    async deleteUser(req, res) {
        //set user disable
        console.log(req.params)
        let user = await this.service.disableUser(parseInt(req.params.id))
        console.log(user)
        res.sendStatus(200)
        //let feedback = await this.service.disableUser()
    }
    async getAllUser(req, res) {
        let user = await this.service.getAllUser()
        console.log(user)
        res.json(user)
        //res.sendStatus(200)
    }
}

module.exports = UserRouter