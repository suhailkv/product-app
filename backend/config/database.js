const { Sequelize } = require('sequelize');
const mysql = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASS, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const postgres = new Sequelize(process.env.PG_DB, process.env.PG_USER, process.env.PG_USER, {
  host: process.env.PG_USER,
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = { mysql, postgres };
