const {Content} = require('../models/models');

class LessonController{
    async getDataLesson(req, res){
        const content = await Content.findAll();
        return res.json(content);
    }
}

module.exports = new LessonController();