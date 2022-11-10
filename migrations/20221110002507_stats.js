/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('stats', (table) => {
        table.increments('stats_id')
        table.integer('user_id')
        table.dateTime('time')
        table.bigInteger('traffic')
        table.foreign('user_id').references("user.user_id")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('stats')
};
