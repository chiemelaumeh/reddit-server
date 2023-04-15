import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  author: {type: String, required: true},
  title: {type: String, required: true}, 
  postedAt: {type: Date},
  body: {type: String, required: true},
  parentId:{type:mongoose.ObjectId, required:false},
  rootId:{type:mongoose.ObjectId, required:false}

})


const Comment = mongoose.model("Comment", userSchema)

export default Comment