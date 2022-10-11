const Sequelize = require('sequelize')
module.exports = new Sequelize('erc_tb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});