import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    "edu",
    "root",
    "1234",
    {
        dialect: "mysql",
        host:"localhost",
        port: 3306
    }
)

export default sequelize;