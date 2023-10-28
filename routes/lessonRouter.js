const Router = require('express');
const router = new Router();
const lessonController = require('../controllers/lessonController');

router.get('/', lessonController.getDataLesson);
router.get('/python', lessonController.getDataOnePythonLesson);
router.post('/create', lessonController.createContent);

module.exports = router;