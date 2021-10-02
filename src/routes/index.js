const express = require('express');
const router = express.Router();
const postController = require('../posts/posts.controller');
const userController = require('../user/user.controller');
const projectController = require('../projects/projects.controller');
// const postMiddleware = require('../posts/posts.middleware');


//get homePage
router.get('/', postController.getHomePage);

//error page
/* router.get('*', function(req, res){
  res.status(404,'page not found');
  res.render('error');
<<<<<<< Updated upstream
});
=======
}); */

>>>>>>> Stashed changes
//without authentication
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);


//post,update or delete comment
//need authentication access
router.post('/posts', userController.isAuthenticated, postController.createPosts);
router.get('/posts', userController.isAuthenticated, postController.createPosts);
router.put('/posts/:id', userController.isAuthenticated,postController.updatePostById);
router.delete('/posts/:id', userController.isAuthenticated,postController.deletePostById);


<<<<<<< Updated upstream
//post update or delete Course Details 
//without authentication
router.get('/CourseDetails', postController.getHomePage);
router.post('/CourseDetails',  postController.createPostsCourseDetails);
/*
router.put('/CourseDetails/:id', postController.updatePostById);
router.delete('/CourseDetails/:id',postController.deletePostById);
=======
//--------

/* //post update or delete Course Details 
//without authentication
router.get('/CourseDetails', postController.getPosts);
router.post('/CourseDetailsPosts',  postController.createPosts);
router.put('/CourseDetailsPosts/:id', postController.updatePostById);
router.delete('/CourseDetailsPosts/:id',postController.deletePostById); */
>>>>>>> Stashed changes


//post update or delete project Details 
//without authentication
router.get('/projectDetailsPosts', projectController.getProjects);
router.post('/projectDetailsPosts',  projectController.createProject);
router.put('/projectDetailsPosts/:id', projectController.updateProjectById);
router.delete('/projectDetailsPosts/:id',projectController.deleteProjectById);


module.exports = router;
