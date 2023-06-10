import mongoose from "mongoose"

const voteSchema = new mongoose.Schema({
  author: {type: String, required: true},
  commentId:{type:mongoose.ObjectId, required:true},
  direction: {type:String, required: true},
  hasVotedUp: {type: Boolean, default:false, required:true},
  hasDownUp: {type: Boolean, default:false, required:true},
  postedAt: {type: Date}

})


const Vote = mongoose.model("Vote", voteSchema)

export default Vote