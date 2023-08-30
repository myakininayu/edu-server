const sequelize = require('../db');
const {DataTypes} = require('sequelize');

/* const Lesson = sequelize.define('lesson', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    theme:{type: DataTypes.STRING},
    text:{type: DataTypes.STRING}
})*/

const Subject = sequelize.define('subject', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING}
})

const Theme = sequelize.define('theme', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING}
})

const Lesson = sequelize.define('lesson', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    date:{type: DataTypes.DATE},
})

const Text = sequelize.define('text', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    text:{type: DataTypes.STRING, notNull: true}
})

const Picture = sequelize.define('picture', {
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING},
    address:{type: DataTypes.STRING, notNull: true}
})

Subject.hasMany(Theme);
Theme.belongsTo(Subject);

Theme.hasMany(Lesson);
Lesson.belongsTo(Theme);

Lesson.hasMany(Text);
Text.belongsTo(Lesson);

Lesson.hasMany(Picture);
Picture.belongsTo(Lesson);

module.exports = {
    Subject,
    Theme,
    Lesson,
    Text,
    Picture

}