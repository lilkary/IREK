const {Schema, model} = require("mongoose")

const Comment = new Schema({
  style  : String,
  comment: String,
  user_id : Schema.ObjectId,
  user_image: String, 
  user_name: String, 
  like_ammount: Array
})

module.exports = model("comments", Comment)