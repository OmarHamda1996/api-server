const Sequelize = require('sequelize');
const config = require('../../config/config.json');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, config[env]);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Food = require('./food')(sequelize, Sequelize);
db.MedicalRecord = require('./medicalrecord')(sequelize, Sequelize);

module.exports = db;
