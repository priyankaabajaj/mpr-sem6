const mongoose = require("mongoose")

const signUpSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String
  }
)

const signUpModel = mongoose.model("signup",signUpSchema)
module.exports = signUpModel
