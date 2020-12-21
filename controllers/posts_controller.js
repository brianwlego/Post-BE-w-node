const Post = require("../models/post")


exports.indexPosts = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.status(200).json({
        posts: posts
      })
    })
    .catch(err => {
      console.log(err)
    })
}

exports.showPost = (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => {
      if (!post){
        const error = new Error('Post does not exist')
        throw error;
      } else {
        return res.status(201).json({
          post: post
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
}

exports.createPost = (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  })
  post.save()
    .then(post => {
      res.status(200).json({
        post: post
      })
    })
    .catch( err => {
      console.log(err)
    })
}

exports.updatePost = (req, res, next) => {
  const update = {title: req.body.title, content: req.body. content}
  Post.findByIdAndUpdate(req.params.id, update, {new: true})
    .then(post => res.status(200).json({post: post}))
    .catch(err => console.log(err))
}

exports.deletePost = (req, res, next) => {
  Post.findByIdAndRemove(req.params.id)
    .then(result => res.status(200).json(result._id))
    .catch(err => console.log(err));
}