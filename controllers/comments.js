const methodOverride = require('method-override')
const Post = require('../models/post')

module.exports = {
    addComment,
}

function addComment(req, res) {
    Post.findById(req.params.id, function(err, post) {
        post.comments.push(req.body)
        post.save(function(err) {
            res.redirect(`/posts/${post._id}`)
        })
    })
}