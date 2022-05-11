const Post = require('../models/post')
const User = require('../models/user')


module.exports = {
    index,

}

function index(req, res) {
    // Post.find({ userName: req.user.name })
    res.render('user/index')
}