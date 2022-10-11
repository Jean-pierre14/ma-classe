const Sequelize = require('sequelize')
module.exports = new Sequelize('school', 'root', '', {
    host: 'localhost',
    dialect: 'mysqli'
});