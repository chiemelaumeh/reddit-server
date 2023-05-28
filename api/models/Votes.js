import mongoose from "mongoose"

const voteSchema = new mongoose.Schema({
  author: {type: String, required: true},
  commentId:{type:mongoose.ObjectId, required:true},
  direction: {type:Number, required: true}

})


const Vote = mongoose.model("Vote", voteSchema)

export default Vote