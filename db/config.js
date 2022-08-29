const { config } = require('./../config/config.js');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
module.exports = {
  development: {
    username: 'Alexander',
    password: 'admin123',
    database: 'my_store',
    URL: URI,
    dialect: 'postgres',
  },
  production: {
    username: 'Alexander',
    password: 'admin123',
    database: 'my_store',
    URL: URI,
    dialect: 'postgres',
  },
};
