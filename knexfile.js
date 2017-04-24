// Update with your config settings.

module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "your_database_password",
    database: "discord"
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
