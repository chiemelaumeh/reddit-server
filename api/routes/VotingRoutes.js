import express from "express";
const router = express.Router();
import Vote from "../models/Votes.js";
import { getUserFromToken } from "../UserFunctions.js";

router.get("/vote/:commentId/:direction/", (req, res) => {
  const token = req.cookies.token;
  const handleVoting = async () => {
    try {
      const userInfo = await getUserFromToken(token);

      const vote = new Vote({
        author: userInfo.username,
        direction: req.params.direction === "up" ? 1 : -1,
        commentId: req.params.commentId,
      });

      const newvote = await vote.save();

      const commentVotes = await Vote.find({
        commentId: req.params.commentId
        
      })
      res.json(commentVotes);
    } catch (error) {
      console.error(error.message);
    }
  };
  handleVoting();
});

export default router;
