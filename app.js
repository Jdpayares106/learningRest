const express = require("express")

// learning to use the morgan middleware
const morgran = require("morgan")

const app = express()


// I can also create custom middleware and apply them using the "use" function from express
const customMiddleware = (req, res, next) => {
  console.log("my middleware!")
  // node js is a singlethreaded event loop based program so with the next method we let node know to move on after
  // the job of our middleware is done
  next()
}

// middleware is somethig that is happening in the middle of the flow of code
app.use(morgran('dev'))
// using my own middleware the same way as a third party
app.use(customMiddleware)

// bringing routes from routes
const postRoutes = require("./routes/post")

// passing the routes as a callback func
app.get('/', postRoutes.getPosts)

const port = 8080;

app.listen(port, () => {
  console.log("app is listening on port " + port)
});
