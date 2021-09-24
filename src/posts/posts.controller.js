const postService = require('./posts.service');  //because we will be creating post thus need help of database

module.exports.skeleton = function(req,res,next){
    res.json({"message": "hello world"})
}

module.exports.getHelloworld = function(req,res,next){
    const message = 'hello' + req.body.name;
    res.json({"message": message});
}

module.exports.createBlog = function(req,res,next){
    res.json({"message": "hello world"})
}

