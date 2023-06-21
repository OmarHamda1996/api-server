const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const MedicalRecord = sequelize.define('MedicalRecord', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  patientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
});

module.exports = MedicalRecord;
