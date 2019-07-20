// Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. 
// Models are responsible for creating and reading documents from the underlying MongoDB database.
const mongoose = require("mongoose")

// the schema class takes in an object and then it is passed into the model to be used application-wide
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required",
    minlength: 4,
    maxlength: 150
  },
  body: {
    type: String,
    required: "Body is requried",
    minlength: 4,
    maxlength: 200
  }
})

// to create a model: mongoose.model(modelName, schema)
module.exports = mongoose.model("Post", postSchema)