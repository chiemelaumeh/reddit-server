import express from "express";
const router = express.Router();
import Community from "../models/Community.js";
import Comment from "../models/Comments.js";

import { getUserFromToken } from "../server.js";

router.post("/", async (req, res) => {
  // const token = req.cookies.token;

  try {
    // const userInfo = await getUserFromToken(token);
    const { title, body, parentId, rootId } = req.body;
    const chosenCommunity =
      req.body.selectedCommunity || req.body.chosenCommunity;
    const communityExists = await Community.findOne({ name: chosenCommunity });

    const comment = new Comment({
      title,
      body,
      chosenCommunity,
      author: "Random User",
      postedAt: Date.now(),
      parentId,
      rootId,
    });
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error(error.message);
  }
});

export default router;
