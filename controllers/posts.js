const Post = require('../models/post')


module.exports = {
    index,
    new: newPost,
    create,
    show,
    delete: deletePost,
    edit,
    update,
}

function index(req, res) {
    Post.find({}, function(err, post) {
        post.reverse()
        res.render('posts/index', {post})
    })
}

function newPost(req, res) {
    res.render('posts/new')
}

function create(req, res) {
 if (req.user) {
    req.body.user = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar
 }
    const post = new Post(req.body)
    post.save(function(err) {
        if (err) return res.redirect('/posts/new')
        console.log(post)
        res.redirect('/posts')
    })

}

function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/show', {post, title: 'View Post'})
        console.log(post)
    })
}

function deletePost(req, res, next) {
    Post.findByIdAndRemove(req.params.id, function(err, post) {
        if (err) return next(err)
        res.redirect('/posts')
    })
}

async function edit(req, res) {
    try {
        const post = await Post.findById(req.params.id)
        res.render('posts/edit', {post})
    } catch {
        res.redirect('/posts')
    }  
}

function update(req, res) {
    Post.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
            post.save()
                if (err) { console.error(error) }
                res.redirect('/posts')
            })
}