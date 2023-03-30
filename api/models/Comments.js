import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  author: {type: String, required: true},
  title: {type: String, required: true}, 
  postedAt: {type: Date},
  body: {type: String, required: true},
  parentId:{type:mongoose.ObjectId, reequired:false},
  rootId:{type:mongoose.ObjectId, reequired:false}

})


const Comment = mongoose.model("Comment", userSchema)

export default Comment