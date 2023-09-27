import express from "express";
const router = express.Router();
import Community from "../models/Community.js";
import { getUserFromToken } from "../server.js";

router.post("/", async (req, res) => {
  // const token = req.cookies.token;
  const { name, slogan, avatar, cover } = req.body;

  const communityExists = await Community.exists({ name });
  if (communityExists) {
    res.send("That community exists, try another");
  } else {
    // if (token) {
      // await getUserFromToken(token);
      const community = new Community({
        name,
        slogan,
        avatar,
        cover,
      });
      try {
        const newCommunity = await community.save();
        res.status(201).json(newCommunity);
      } catch (error) {
        console.error(error.message);
      }
    // } 
    // else {
    //   res.send("Please login to create subreddit");
    // }
  }
});

// const { email, username } = req.body;
// const findUser = await User.exists({ username });

router.get("/:chosenCommunity", async (req, res) => {
  const { chosenCommunity } = req.params;
  // console.log(chosenCommunity)
  try {
    const theCommunity = await Community.findOne({ name: chosenCommunity });
    res.status(200).json(theCommunity);
    // console.log(theCommunity)
  } catch (error) {
    console.log(error.message);
  }
});
router.get("/", async(req,res)=> {
  // console.log("erf")
  try {
    // const theCommunities = await Community.distinct('name')
    const theCommunities = await Community.find()
    res.status(200).json(theCommunities)

    
  } catch (error) {
    console.log(error.message);
  }
})

export default router;
