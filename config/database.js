const { Sequelize, Op, DataTypes } = require('sequelize')
const db = new Sequelize('nodejsreact', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { db, Op, DataTypes }