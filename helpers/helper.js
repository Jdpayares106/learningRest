// creating a custom express-validator middleware that will get passed in the app.js 
// the next argument is used to keep the event loop going and not get stuck after finishing using the middleware
exports.createPostsValidator = (req, res, next) => {
  // checking if the title is empty
  req.check("title", "Write a title").notEmpty()
  // checking if the title meets the minimum length, checks using the obejct passed into isLength
  req.check("title", "Title must be 4 to 150 chars long").isLength({min: 4, max: 150})
  // Same validation for body
  req.check("body", "Write a body").notEmpty()
  // checking if the body meets the minimum length, checks using the obejct passed into isLength
  req.check("body", "body must be 4 to 2000 chars long").isLength({min: 4, max: 2000})

  // the above will not be able to catch all errors in order to do so, first we get all the errors
  const errors = req.validationErrors()
  // if an error occurs we can just show the first one 
  if (errors) {
    const firstError = errors.map((err) => err.msg)[0]
    return res.status(400).json({error: firstError})
  }

  // go on to the next middleware or whatever event...
  next()
}