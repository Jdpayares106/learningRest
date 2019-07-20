const Post = require("../models/postModel");

// controllers take care of the app logic related to a specific route
exports.getPosts = (req, res) => {
  res.json({
    "posts" : [
      {"title": "First Post"},
      {"title": "Second Post"}
    ]
  })
}

// controller for creating a new post
exports.createPosts = (req, res) => {
  // using the post model that we created from the postSchema in our models
  // ***models are classes*** that define each document through the schema
  const post = new Post(req.body);
  // since we are handling errors thorugh express-validator as a middleware no need to 
  // do that in the controller anymore
  post.save().then(result => {
    res.status(200).json({ post: result })
  })
}
