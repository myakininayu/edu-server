import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.ts';

const Content = sequelize.define('content', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    course:{type: DataTypes.STRING},
    type:{type: DataTypes.STRING},
    text:{type: DataTypes.STRING},
    image:{type: DataTypes.STRING}
})

export default Content;