const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Food = sequelize.define('Food', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

module.exports = Food;
