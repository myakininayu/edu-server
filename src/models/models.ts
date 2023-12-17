import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.ts';

const Content = sequelize.define('content', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    course:{type: DataTypes.STRING},
    type:{type: DataTypes.STRING},
    text:{type: DataTypes.STRING},
    image:{type: DataTypes.STRING}
})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}

})

export { Content, User };