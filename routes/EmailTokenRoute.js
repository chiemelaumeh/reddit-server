import express from "express";
const router = express.Router();
import User from "../models/User.js";
import Token from "../models/Token.js";
import path from "path";

router.get("/:id/verify/:token", async(req, res) => {
  // const verifyAndDelete = async () => {
    console.log("here 0")

    try {
      const user = await User.findOne({ _id: req.params.id });
     console.log("here 1")
      if (!user) return res.status(400).send("Invalid link");
      const token = await Token.findOne({
        userId: user._id,
        token: req.params.token,
      });
     console.log("here 2")


      if (!token) return res.status(400).send("Invalid token");
      console.log("here 3")
 
      const updated = await User.findOneAndUpdate(
        { _id: user._id },
        { verified: true },
        { returnDocument: "after" }
      );
       await token.remove();
       console.log("here 4")

      res.status(300).redirect("https://myreddit-api.onrender.com/emailverified");
     console.log("here 5")

    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  

});





export default router;