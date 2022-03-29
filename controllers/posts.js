const Post = require('../models/post')


module.exports = {
    index,
    new: newPost,
    create,
}

function index(req, res) {
    Post.find({}, function(err, post) {
        res.render('posts/index', {post})
    })
}

function newPost(req, res) {
    res.render('posts/new')
}

function create(req, res) {
    const post = new Post(req.body)
    post.save(function(err) {
        if (err) return res.redirect('/posts/new')
        console.log(post)
        res.redirect('/posts')
    })

}