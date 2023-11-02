const {Content} = require('../models/models');
const {where} = require("sequelize");


class LessonController{
    async getDataLesson(req, res){
        const content = await Content.findAll();
        return res.json(content);
    }

    async getDataOnePythonLesson(req, res){
        const content = await Content.findOne({ where: { course: 'python' } });
        return res.json(content);
    }

    async createContent(req, res){
        const { course, type, text, image } = req.body;
        console.log(req.body)
        const content = await Content.create({course, type, text, image})
        return res.json(content);
    }

    async updateContent(req, res){
        const { course, type, text, image } = req.body;
        const idContent = req.query.id;

        const content = await Content.update({course, type, text, image}, {
            where: {
                id: idContent,
            },
        })
        return res.json(content);
    }
    async deleteContent(req, res) {
        const idContent = req.query.id;
        const content = await Content.destroy({
            where: {
                id: idContent
            }
        });
        res.json({message:"Запись успешно удалена"});
    }
}
module.exports = new LessonController();