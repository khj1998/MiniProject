const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development'
const config = require('../config')[env];

const sequelize = new Sequelize(
    config.database, 
    config.username, 
    config.password,
    config
    );
  
const Reservation = require('./reservation');

const db = {};
db.sequelize = sequelize;
db.Reservation = Reservation;

Reservation.init(sequelize);

module.exports = db;