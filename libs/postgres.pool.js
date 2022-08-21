const { Pool } = require('pg');
const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
// const URI = `postgres://Alexander:admin123@localhost:5432/my_store`

const pool = new Pool({ connectionString: URI })

// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'Alexander',
//   password: 'admin123',
//   database: 'my_store',
// });

module.exports = pool;
