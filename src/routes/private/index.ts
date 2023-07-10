import { Router } from 'express';
import posts from './posts';

const router = Router();

router.use('/post', posts);

export default router;