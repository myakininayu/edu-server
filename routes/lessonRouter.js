const Router = require('express');
const router = new Router();
const lessonController = require('../controllers/lessonController');

router.get('/', lessonController.getDataLesson);
router.get('/python', lessonController.getDataOnePythonLesson);
router.post('/create', lessonController.createContent);
router.put('/update', lessonController.updateContent);
router.delete('/delete',lessonController.deleteContent);
module.exports = router;