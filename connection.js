const {mysql,postgres} = require('./config/database')
require('./models/product')
console.log(process.env.MYSQL_USER)
exports.init = async () =>{
    try {
      await mysql.authenticate();
      await mysql.sync()
      // await postgres.authenticate();
      // await postgres.sync()
      console.log('Database connections are healthy.' );
    } catch (error) {
      console.error('Database connection error:', error);
    }
}
