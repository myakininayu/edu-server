import { Router } from 'express';
import lessonController from '../controllers/lessonController.ts';

const router = Router();

router.get('/', lessonController.getDataLesson);
router.get('/python', lessonController.getDataOnePythonLesson);
router.post('/create', lessonController.createContent);
router.put('/update', lessonController.updateContent);
router.delete('/delete', lessonController.deleteContent);

export default router;