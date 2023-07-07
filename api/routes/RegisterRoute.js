import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import User from "../models/User.js";
import Token from "../models/Token.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

router.post("/", async (req, res) => {
  const { email, username } = req.body;
  const findUser = await User.exists({ username });
  const findEmail = await User.exists({ email });
  if (!findUser) {
    if (!findEmail) {
      try {
        const password = await bcrypt.hashSync(req.body.password, 10);
        const user = new User({
          email,
          username,
          password,
          
        });
        const newUser = await user.save();
        // console.log(info)
        // const emailToken = await new Token({
        //   userId: newUser._id,
        //   token: crypto.randomBytes(32).toString("hex"),
        // }).save();

        // const url = `
        // ${process.env.BASE_URL}users/${newUser._id}/verify/${emailToken.token}`;
        // await sendEmail(newUser.email, "Verify Email", url);
        res.status(201).send({authReg:`Profile successfully created for ${username}`});
        // console.log(`profile created for ${username}, now please Log in!`);
      } catch (error) {
        console.error(error.message);

        res.status(500);
      }
    } else {
      res.json({message: "Email taken. Try again.", errorStatus:true});
      console.log("Email taken. Try again.");
    }
  } else {
    res.send({message: "Username taken. Try again.", errorStatus:true});
    console.log("Username taken. Try again.");
  }
});

// router.get("/:id/verify/:token", async (req, res) => {
//   try {
//     const user = await User.findOne({ _id: req.params.id });
//     if (!user) return res.status(400).send("Invalid link");
//     const token = await Token.findOne({
//       userId: user._id,
//       token: req.params.token,
//     });
//     if (!token) return res.status(400).send("Invalid link");
//     await User.updateOne({ _id: user_id, verified: true });
//     await token.remove();
//     res.status(200).send("Email verified successfully");
//   } catch (error) {
//     res.status(500).send("Internal Server ErroZZZ");
//   }
// });
export default router;
