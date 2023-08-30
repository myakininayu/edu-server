const Router = require('express');
const router = new Router();
const lessonController = require('../controllers/lessonController');

router.get('/', lessonController.getDataLesson);

module.exports = router;