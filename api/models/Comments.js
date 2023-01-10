import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  author: {type: String, required: true},
  title: {type: String},
  postedAt: {type: Date, required: true},
  body: {type: String, required: true}

})


const Comment = mongoose.model("Comment", userSchema)

export default Comment