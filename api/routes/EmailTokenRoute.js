import express from "express";
const router = express.Router();
import User from "../models/User.js";
import Token from "../models/Token.js";

router.get("/:id/verify/:token", (req, res) => {

  const verifyAndDelete = async() => {

    try {
      const user = await User.findOne({ _id: req.params.id });
  
      if (!user) return res.status(400).send("Invalid link");
      const token = await Token.findOne({
        userId: user._id,
        token: req.params.token,
      });
  
      if (!token) return res.status(400).send("Invalid link");
  
      const updated = await User.findOneAndUpdate(
        { _id: user._id },
        { verified: true },
        { returnDocument: "after" }
      );
      const removedToken = await token.remove();
      // console.log(updated);
      // console.log(removedToken);
  
      res.send("Email verified successfully server");
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
  verifyAndDelete()
});

export default router;
