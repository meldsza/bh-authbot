// Update with your config settings.

module.exports = {
  client: "mssql",
  connection: {
    host: process.env.DB_HOST,
    user: "melroy",
    password: process.env.DB_PASS,
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
