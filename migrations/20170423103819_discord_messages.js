
exports.up = function (knex, Promise) {
    return knex.schema.createTable('discord_messages', function (t) {
        t.increments('id').unsigned().primary();
        t.timestamps();
        t.string('author').notNull();
        t.string('messageID').notNull();
        t.string('channel').notNull();
        t.text('text').nullable();
        t.boolean('deleted').defaultTo(false);
    });
};

exports.down = function (knex, Promise) {
        return knex.schema.dropTable('discord_messages');
};
