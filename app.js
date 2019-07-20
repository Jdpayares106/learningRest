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

// I am using the routes as a middleware, so the use function will take the path and match it in my route middleware 
// with the help of express router and then take me there
// any request that is gotten to the '/' path will be passed into postRoutes and then it will be handled there
app.use('/', postRoutes)

const port = 8080;

app.listen(port, () => {
  console.log("app is listening on port " + port)
});
