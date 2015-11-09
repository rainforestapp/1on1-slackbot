// Update with your config settings.
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'rf-pinboard',
      user:     'postgres',
      password: ''
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'rf-pinboard',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
