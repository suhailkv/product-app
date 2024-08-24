const { DataTypes } = require('sequelize');
const { mysql } = require('../config/database');

const Product = mysql.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  purchase_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sales_price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  profit: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'Products',
  timestamps: false,
});

module.exports = Product;
