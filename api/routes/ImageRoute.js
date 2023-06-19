import express from "express"
const router = express.Router()
import User from "../models/User.js";
import { getUserFromToken } from "../server.js"


router.post("/", async (req, res) => {
  const getImage = async () => {
    const token = req.cookies.token;

    try {
      const username = await getUserFromToken(token);
      const user = username.username;
      const chosenUser = await User.findOne({ username: user });
      res.json(chosenUser.picture);
    } catch (error) {
      console.error(error);
    }
  };

  getImage();
});

export default router