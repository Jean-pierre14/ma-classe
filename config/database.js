const Sequelize = require('sequelize')
module.exports = new Sequelize('nodejsreact', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});