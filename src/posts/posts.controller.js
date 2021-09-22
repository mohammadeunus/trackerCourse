const postService = require('./posts.service');

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