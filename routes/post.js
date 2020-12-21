const express = require('express');

const router = express.Router();

const postController = require('../controllers/posts_controller')

//** INDEX **//
router.get('/posts', postController.indexPosts)
//** SHOW **//
router.get('/post/:id', postController.showPost)
//** CREATE **//
router.post('/post', postController.createPost)
//** UPDATE **//
router.put('/post/:id', postController.updatePost)
//** DELETE **//
router.delete('/post/:id', postController.deletePost)

module.exports = router;