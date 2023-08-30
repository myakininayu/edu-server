const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    "edu",
    "root",
    "1234",
    {
        dialect: "mysql",
        host:"localhost",
        port: 3306
    }
)