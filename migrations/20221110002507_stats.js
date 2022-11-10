/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('stats', (table) => {
        table.increments('stats_id')
        table.integer('user_id')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.bigInteger('ut')
        table.bigInteger('dt')
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
