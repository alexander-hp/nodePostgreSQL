const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

// * conectando a BD
// ? postgres
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
// ? mysql
// const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  // ? en consola cada vez que hagamos consulta con ORM veremos
  // ? como se ejecutaria si lo hicieramos de forma nativa
  logging: true,
});

setupModels(sequelize);

// ? sincronizacion: coge el modelo y crea la estructura, no como cuando corriemos
// ? el query de tasks
// sequelize.sync();

module.exports = sequelize;
