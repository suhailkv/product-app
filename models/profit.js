const { DataTypes } = require('sequelize');
const { postgres } = require('../config/database');

const Profit = postgres.define('Profit', {
  record_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  profit: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'Profits',
  timestamps: false,
});

module.exports = Profit;
