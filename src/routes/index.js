const express = require('express');
const router = express.Router();
const postController = require('../posts/posts.controller');
const userController = require('../user/user.controller');
// const postMiddleware = require('../posts/posts.middleware');


//get homePage
router.get('/', function(req, res) { 
  res.render('homePage');
});

//error page
router.get('*', function(req, res){
  res.status(404,'page not found');
  res.render('error');
});

//without authentication
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);


//post,update or delete comment
//need authentication access
router.post('/posts', userController.isAuthenticated, postController.createPosts);
router.put('/posts/:id', userController.isAuthenticated,postController.updatePostById);
router.delete('/posts/:id', userController.isAuthenticated,postController.deletePostById);

/*
//post update or delete Course Details 
//without authentication
router.get('/CourseDetails', postController.getPosts);
router.post('/CourseDetailsPosts',  postController.createPosts);
router.put('/CourseDetailsPosts/:id', postController.updatePostById);
router.delete('/CourseDetailsPosts/:id',postController.deletePostById);


//post update or delete project Details 
//without authentication
router.get('/projectDetailsPosts', postController.getPosts);
router.post('/projectDetailsPosts',  postController.createPosts);
router.put('/projectDetailsPosts/:id', postController.updatePostById);
router.delete('/projectDetailsPosts/:id',postController.deletePostById);
*/

module.exports = router;
