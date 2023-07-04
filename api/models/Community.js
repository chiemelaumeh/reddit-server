import mongoose from "mongoose"

const communitySchema = new mongoose.Schema({
  name : {type: String, required: true},
  slogan : {type: String, required: true},

})

const Community = new mongoose.model("Community", communitySchema)

export default Community