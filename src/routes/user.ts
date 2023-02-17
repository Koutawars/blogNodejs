import { Router } from 'express';
import { userController } from '../controllers/user';
import { buildExpressCallback } from '../utils/buildExpressCallback';

const router = Router();

router.post('/login', buildExpressCallback(userController.login));
router.post('/register', buildExpressCallback(userController.register));

export default router;