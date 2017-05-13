// Update with your config settings.

module.exports = {
  client: "sqlite",
  connection: {
    filename: './dev.sqlite3'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
