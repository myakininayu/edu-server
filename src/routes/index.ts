import { Router } from 'express';
import lessonRouter from './lessonRouter.js';

const router = Router();

router.use('/lesson', lessonRouter);

export default router;