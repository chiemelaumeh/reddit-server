import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  author: {type: String},
  title: {type: String, required: true}, 
  postedAt: {type: Date},
  body: {type: String, required: true}

})


const Comment = mongoose.model("Comment", userSchema)

export default Comment