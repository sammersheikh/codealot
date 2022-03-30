var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')

router.post('/posts/:id/comments', commentsCtrl.addComment)


module.exports = router;