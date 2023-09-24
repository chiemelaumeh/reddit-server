import express from "express"
const router = express.Router()
import Comment from "../models/Comments.js";


router.get("/", async (req, res) => {
  const { search, chosenCommunity } = req.query;
  const filter = search
    ? { title: { $regex: ".*" + search + ".*" } }
    : { rootId: null };

  if (chosenCommunity) {
    filter.chosenCommunity = chosenCommunity;
  }

  try {
    const comments = await Comment.find(filter).sort({ postedAt: -1 });
    res.json(comments);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);

  } catch (err) {
    console.error(err.message);
  }
});

router.get("/root/:rootId", async (req, res) => {
  try {
    const comments = await Comment.find({ rootId: req.params.rootId }).sort({
      postedAt: -1,
    });
    res.json(comments);

  } catch (err) {
    console.error(err.message);
  }
});

router.get("/parent/:parentId", async (req, res) => {
  try {
    const comments = await Comment.find({ parentId: req.params.parentId });
    res.json(comments);
  } catch (err) {
    console.error(err.message);
  }
});


export default router