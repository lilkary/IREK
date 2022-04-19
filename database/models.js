const {Schema, model} = require("mongoose")

const Users = new Schema({
  nombre   : String,
  email    : {
    unique: true,
    required: true,
    type : String,
  },
  password : String, 
  edad     : String
})

module.exports = model("users", Users)