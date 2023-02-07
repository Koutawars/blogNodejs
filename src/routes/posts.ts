import { Router } from 'express';
import { getPosts } from '../controllers/posts';
import { buildExpressCallback } from '../utils/buildExpressCallback';

const router = Router();

router.get('/',  buildExpressCallback(getPosts));

export default router;