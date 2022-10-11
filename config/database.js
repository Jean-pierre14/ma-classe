const { Sequelize, DataTypes } = require('sequelize')
const db = new Sequelize('nodejsreact', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { db, DataTypes }