const {Content} = require('../models/models');


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
}

module.exports = new LessonController();