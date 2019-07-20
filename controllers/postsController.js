// controllers take care of the app logic related to a specific route
exports.getPosts = (req, res) => {
  res.json({
    "posts" : [
      {"title": "First Post"},
      {"title": "Second Post"}
    ]
  })
}
