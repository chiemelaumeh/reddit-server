import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import User from "../models/User.js";

router.post("/", async (req, res) => {
  const { email, username } = req.body;
  const findUser = await User.exists({ username });
  if (findUser) {
    res.send("Username taken. Try again.");
    console.log("Username taken. Try again.");
  } else {
    const password = bcrypt.hashSync(req.body.password, 10);
    const user = new User({
      email,
      username,
      password,
      picture:"",
    });
    try {
      const info = await user.save();
      res
        .status(201)
        .send(`profile created for ${username}, now please Log in!`);
      console.log(`profile created for ${username}, now please Log in!`);
    } catch (error) {
      console.error(error.message);

      res.status(500);
    }
  }

});
export default router