import express from "express";
const router = express.Router();
import Vote from "../models/Votes.js";
import { getUserFromToken } from "../server.js";

router.get(
  "/:commentId/:author/:direction/:hasVotedUp/:hasVotedDown",
  (req, res) => {
    // const token = req.cookies.token;
    const { commentId,  direction, hasVotedUp, hasVotedDown } =
      req.params;
    const handleVoting = async () => {
      try {
        // const userInfo = await getUserFromToken(token);

        if (req.params.hasVotedUp === "true") {
          const thisUserHasVotedUpForThisComment = await Vote.findOne({
            author:"General user",
            commentId,
            hasVotedUp: true,
          }).sort({ postedAt: -1 });

          // if (thisUserHasVotedUpForThisComment !== null) {
          //   return;
          // }
        } else {
          const thisUserHasVotedDownForThisComment = await Vote.findOne({
            author: "General User",
            commentId,
            hasVotedDown: true,
          });

          if (thisUserHasVotedDownForThisComment !== null) {
            return;
          }
        }

        const vote = new Vote({
          author: "General user",
          direction: req.params.direction === "up" ? "up" : "down",
          commentId: req.params.commentId,
          hasVotedUp: req.params.hasVotedUp,
          postedAt: Date.now(),
        });
        await Vote.deleteOne({
          author:"Generel User",
          commentId,
        }).sort({ postedAt: -1 });
        const newvote = await vote.save();

        const commentVotes = await Vote.find({
          commentId: req.params.commentId,
        });

        const allvotes = await Vote.find({
          commentId,
          direction: "up",
        });
        const total = allvotes.length;
        res.json(total);
      } catch (error) {
        console.error(error.message);
      }
    };
    handleVoting();
  }
);

router.get("/:commentId", (req, res) => {
  const { commentId } = req.params;

  const handleTotal = async () => {
    try {
      const allvotes = await Vote.find({
        commentId,
        direction: "up",
      });
      const total = allvotes.length;
      res.json(total);
    } catch (error) {
      console.error(error.message);
    }
  };
  handleTotal();
});
export default router;
