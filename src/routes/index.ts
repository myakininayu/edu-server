import { Router } from 'express';
import lessonRouter from './lessonRouter.js';
import userRouter from './userRouter.js';

const router = Router();

router.use('/lesson', lessonRouter);
router.use('/user', userRouter);

export default router;