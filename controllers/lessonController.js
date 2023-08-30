const {Lesson} = require('../models/models');

class LessonController{
    async getDataLesson(req, res){
        const lessons = await Lesson.findAll();
        return res.json(lessons);
    }
}

module.exports = new LessonController();