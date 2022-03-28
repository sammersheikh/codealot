const Post = require('../models/post')


module.exports = {
    index,
    new: newPost,
}

function index(req, res) {
    Post.find({}, function(err, post) {
        res.render('posts/index', {post})
    })
}

function newPost(req, res) {
    res.render('posts/new')
}