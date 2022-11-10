class UserService {
    constructor(knex) {
        this.knex = knex
    }
    getAllUser() {
        return this.knex('user').select('*')
    }
    createUser(user) {
        return this.knex('user').insert(user).returning('user_id')
    }
    disableUser(id) {
        return this.knex('user').where({ user_id: id }).update({ enable: false }).returning('*')
    }

}
module.exports = UserService