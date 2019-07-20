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
  // saving the post to the database using the mongoose save method
  // while saving 2 things will happen, the err and success, we have to handle each accordingly
  post.save((err, result) => {
    // if there was an error we have to send the failure status code and the error itself
    if (err) {
      return res.status(400).json({error: err})
    }

    // in case of sucess send http status success code and the result itself
    res.status(200).json({post: result})
  })
}
