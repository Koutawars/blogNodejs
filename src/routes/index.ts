import { Router } from 'express';

import posts from './posts';

const router = Router();

router.use('/post', posts);

router.use('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
});

export default router;