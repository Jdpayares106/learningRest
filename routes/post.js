// handling my requests and responses through a controller
// controllers take core of the logic in the routes of an api, this is where all the logic happens 
// such as db manipulation, object manipulation, returning of specific altered data etc..

const postController = require("../controllers/postsController");
const express = require("express");
// importing my validation helper 
const validator = require("../helpers/helper");

// this way we have excess to the express router and this entire file can be used as a middleware for routes
const router = express.Router()

// all routes are going to be handled now throurgh the express router
// anything we get, we can pass the second paramater as a callback func which will be our controller
router.get('/', postController.getPosts)


// route for creating a post, using the HTTP POST method
// before even it creates a post, the validation will occur and once it is passed then the post will occur
router.post('/post', validator.createPostsValidator, postController.createPosts)

module.exports = router