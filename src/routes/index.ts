import { Router } from 'express';

import posts from './posts';
import user from './user';

const router = Router();

router.use('/post', posts);
router.use('/', user);

router.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
});

export default router;