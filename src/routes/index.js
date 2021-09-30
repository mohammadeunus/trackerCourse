const express = require('express');
const router = express.Router();
const postController = require('../posts/posts.controller');
const userController = require('../user/user.controller');
// const postMiddleware = require('../posts/posts.middleware');

//error page
router.get('/error', function(req, res) { 
  res.render('error');
});

//unAuthenticated access
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);

//post,update or delete comment
//Authenticated access
router.post('/posts', userController.isAuthenticated, postController.createPosts);
router.put('/posts/:id', userController.isAuthenticated,postController.updatePostById);
router.delete('/posts/:id', userController.isAuthenticated,postController.deletePostById);

//get homePage
router.get('/', function(req, res) { 
  res.render('homePage');
});


module.exports = router;
