import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
  author: {type: String, required: true},
  title: {type: String, required: true}, 
  postedAt: {type: Date},
  body: {type: String, required: true},
  parentId:{type:mongoose.ObjectId, required:false},
  rootId:{type:mongoose.ObjectId, required:false},
  chosenCommunity: {type: String, required: true}

})


const Comment = mongoose.model("Comment", commentSchema)

export default Comment