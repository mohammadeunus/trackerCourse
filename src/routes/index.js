const express = require('express');
const router = express.Router();

const postControllers = require('../posts/posts.controller');
//const postMiddleware = require('../posts/posts.middleware');
// const userController = require('../user/user.controller');

router.get('/', postControllers.getHome);
router.post('/posts', postControllers.createPosts);    //error showing
router.get('/posts', postControllers.getPosts);
router.get('/posts/:id', postControllers.getPostById);
router.put('/posts/:id', postControllers.updatePostById);
router.delete('/posts/:id', postControllers.deletePostById);


/* creating a blog */
router.get('/post', );
module.exports = router;


