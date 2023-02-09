import { Router } from 'express';
import { postController } from '../controllers/posts';
import { buildExpressCallback } from '../utils/buildExpressCallback';

const router = Router();

router.get('/',  buildExpressCallback(postController.getPosts));
router.get('/:id', buildExpressCallback(postController.getPostById));

export default router;