const Post = require("../models/postModel");

// controllers take care of the app logic related to a specific route
exports.getPosts = (req, res) => {
  // getting all posts from the databse using the find method of mongoose model
  // we can also chain the select method to get the exact data we want, just pass the keys you want
  const posts = Post.find().select("_id title body")
                       .then((posts) => {
                        // by default express send a status of 200 except when it cathces an error, so no need to explicitly specify
                          return res.json({ posts: posts })
                       })
                       .catch(err => console.log(err))
}

// controller for creating a new post
exports.createPosts = (req, res) => {
  // using the post model that we created from the postSchema in our models
  // ***models are classes*** that define each document through the schema
  const post = new Post(req.body);
  // since we are handling errors thorugh express-validator as a middleware no need to 
  // do that in the controller anymore
  post.save().then(result => {
    res.json({ post: result })
  })
}
