import express from "express";
const router = express.Router();
import Community from "../models/Community.js";
import { getUserFromToken } from "../server.js";

router.post("/communities", async (req, res) => {
  const token = req.cookies.token;
  const { name, slogan, avatar, cover } = req.body;

  const communityExists = await Community.exists({ name });
  if (communityExists) {
    res.send("That community exists, try another");
  } else {
    if (token) {
      await getUserFromToken(token);
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
    } else {
      res.send("Please login to create subreddit");
    }
  }
});

router.get("/communities/:chosenCommunity", async(req, res) => {
const {chosenCommunity} = req.params
console.log(chosenCommunity)
try {
  const theCommunity = await Community.findOne({chosenCommunity})
  res.status(200).json(theCommunity)

  
} catch (error) {
  console.log(error.message)
}
})

export default router;