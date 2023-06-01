import mongoose from "mongoose"

const communitySchema = new mongoose.Schema({
  name : {type: String, required: true},
  slogan : {type: String, required: true},
  avatar : {type: String, required: false},
  cover: {type: String, required: false},
})

const Community = new mongoose.model("Community", communitySchema)

export default Community