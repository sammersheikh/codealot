var express = require('express');
var router = express.Router();
const postsCtrl = require('../controllers/posts')

/* GET users listing. */
router.get('/', postsCtrl.index)
router.get('/new', postsCtrl.new)
router.get('/:id', postsCtrl.show)
router.get('/:id/edit', postsCtrl.edit)
router.put('/:id', postsCtrl.update)
router.post('/', postsCtrl.create)
router.delete('/:id', postsCtrl.delete)

module.exports = router;
