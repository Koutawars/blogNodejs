import { Router } from 'express';
import { verifyToken } from './middleware/verifyToken';

import privateRouter from './private';
import publicRouter from './public';

const router = Router();

router.use('/', publicRouter);
router.use(verifyToken);
router.use('/', privateRouter);

router.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
});

export default router;