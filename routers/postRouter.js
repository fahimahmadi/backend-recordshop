import express from 'express';

const router = express.Router();

router.route('/')
    .get(getAllPosts)
    .post(addNewPosts)
    .put(updatePosts)
    .delete(deletePosts);

route.get('/post', getOnePost);
router.post('/like', postLiked);

export default router;

