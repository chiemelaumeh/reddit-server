import express from "express"
const router = express.Router()
import User from "../models/User.js";
import { getUserFromToken } from "../server.js"


router.post("/", async (req, res) => {
  const getImage = async () => {
    const token = req.cookies.token;

    try {
      if(!token)
      
      return

      // await getUserFromToken(token);
      // console.log(getUserFromToken)
      const user = await getUserFromToken(token);
      const chosenUser = await User.findOne({ username: user.username });
      res.json(chosenUser.picture);
    } catch (error) {
      console.error(error);
    }
  };

  getImage();
});

export default router