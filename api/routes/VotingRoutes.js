import express from "express";
const router = express.Router();
import Vote from "../models/Votes.js";
import { getUserFromToken } from "../server.js";

router.get("/vote/:commentId/:direction/", (req, res) => {
  const token = req.cookies.token;
  // console.log(req.params)
  const handleVoting = async () => {
    
    try {
      const userInfo = await getUserFromToken(token);
      const lastUser = await Vote.findOne({author: userInfo.username}).sort({_id:-1})
      console.log(lastUser)
      console.log(req.params)
      console.log("newvote")
    

      const vote = new Vote({
        author: userInfo.username,
        direction: req.params.direction === "up" ? 1 : -1,
        commentId: req.params.commentId,
      });
      const newvote = await vote.save();

      const commentVotes = await Vote.find({
        commentId: req.params.commentId,
      });
      let total = 0;
      commentVotes.forEach((vote) => {
        total += vote.direction;
      });
      
      res.json(total);
    } catch (error) {
      console.error(error.message);
    }
  };
  handleVoting();
});

router.get("/votes/:commentId", (req, res) => {
  // const {modalcommentsIds} = req.body
  const handleTotal = async () => {
    try {
      const commentVotes = await Vote.find({ commentId: req.params.commentId });
      let total = 0
      commentVotes.forEach((vote) => {
        total += vote.direction;
      });

      res.json(total);
    } catch (error) {
      console.error(error.message);
    }
  };
  handleTotal();
});
export default router;
