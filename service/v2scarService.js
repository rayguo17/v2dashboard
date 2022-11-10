class V2scarService {
    constructor(knex) {
        this.knex = knex
    }
    getAllUser() {
        return this.knex('user').select('*')
    }
    storeStats(stats) {
        return this.knex('stats').insert(stats).returning('*')
    }
}
module.exports = V2scarService