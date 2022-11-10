class V2scarService {
    constructor(knex) {
        this.knex = knex
    }
    getAllUser() {
        return this.knex('user').select('*')
    }

}
module.exports = V2scarService