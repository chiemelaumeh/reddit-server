import express from "express"
const router = express.Router()
import Comment from "../models/Comments.js"

router.delete("/:id", async(req, res) => {
  const { id } = req.params

  try {
    const commentToDelete = await Comment.deleteOne({_id:id})
    res.json(id)

    
  } catch (error) {
    console.error(error.message)
  }
})

export default router