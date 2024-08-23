const { Sequelize } = require('sequelize');

const mysql = new Sequelize(env.process.MYSQL_DB, env.process.MYSQL_USER, env.process.MYSQL_PASS, {
  host: env.process.MYSQL_HOST,
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const postgres = new Sequelize(env.process.PG_DB, env.process.PG_USER, env.process.PG_USER, {
  host: env.process.PG_USER,
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
const init = async () =>{
    try {
      await mysql.authenticate();
      // await postgres.authenticate();
      console.log('Database connections are healthy.' );
    } catch (error) {
      console.error('Database connection error:', error);
    }
}

module.exports = { mysql, postgres, init };
