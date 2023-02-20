import { Router } from 'express';
import { postController } from '../../controllers/posts';
import { buildExpressCallback } from '../../utils/buildExpressCallback';

const router = Router();

router.get('/',  buildExpressCallback(postController.getPosts));
router.get('/:id', buildExpressCallback(postController.getPostById));
router.post('/', buildExpressCallback(postController.createPost));
router.put('/:id', buildExpressCallback(postController.updatePost));
router.delete('/:id', buildExpressCallback(postController.deletePost));

export default router;