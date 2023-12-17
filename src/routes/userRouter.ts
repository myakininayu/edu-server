import { Router } from 'express';
import userController from '../controllers/userController.ts';
import authMiddleware from '../middleware/authMiddleware.ts';

const router = Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);

export default router;