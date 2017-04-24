// Update with your config settings.

module.exports = {
  client: "mssql",
  connection: {
    host: "bhverifier.database.windows.net",
    user: "melroy",
    password: "RandomPassword@123",
    database: "discord",
    options: {
      port: 1433,
      encrypt: true
    }
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
