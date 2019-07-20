const express = require("express");

// body-parser module is used to parse the body of an incoming request
const bodyParser = require("body-parser");

// learning db using mnogoose for mongodb
const mongoose = require("mongoose");

// learning to use the morgan middleware
const morgran = require("morgan");

// this is the life of a node server and we use this to access all of express functions
const app = express()

// connecting to the databse, connect returns a promise so we can use then to extend on it
// I am also connecting to my local db while as the tutorial is using a cloud databse: https://mlab.com/
mongoose.connect("mongodb://localhost:27017/node_test", {useNewUrlParser: true})
  .then(() => console.log("db connected"))

// the on function from mongoose actually lets us capture error in the database init
let db = mongoose.connection;
db.on('error', err => {
  console.error("DB CONNNECTION ERROR" + err)
});


// middleware is somethig that is happening in the middle of the flow of code
app.use(morgran('dev'))

// body-parser comes with a json method that will format the incoming request into JSON format
app.use(bodyParser.json())

// bringing routes from routes
const postRoutes = require("./routes/post")

// I am using the routes as a middleware, so the use function will take the path and match it in my route middleware 
// with the help of express router and then take me there
// any request that is gotten to the '/' path will be passed into postRoutes and then it will be handled there
app.use('/', postRoutes)

// port number
const port = 8080;

app.listen(port, () => {
  console.log("app is listening on port " + port)
});
