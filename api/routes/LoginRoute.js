import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Token from "../models/Token.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

const secret = process.env.SECRET_KEY;

router.post("/", (req, res) => {
  const { username, password } = req.body;
  const findUser = async () => {
    try {
      const user = await User.findOne({ username });
      if (user && user.username === username) {
        const passOk = bcrypt.compareSync(password, user.password);
        if (passOk) {
          jwt.sign({ id: user._id }, secret, (err, token) => {
            try {
              res.cookie("token", token).json("logged in");
              console.log(token);
            } catch (err) {
              console.error(err.message);
              res.status(500);
            }
          });
          if (!user.verified) {
            let token = await Token.findOne({ userId: user._id });
            if (!token) {
              const emailToken = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
              }).save();
              const url = `${process.env.BASE_URL}users/${user._id}/verify/${emailToken.token}`;

             await sendEmail(user.email, "Verify Email", url);
              
            }
            res
              
              .send("logged in! Verification link sent to your email");
          }
        } else {
          res.json("invalid password");
          console.log("invalid password");
        }
      } else {
        res.json("Invalid username");
        console.log("invalid username");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  findUser();
});

export default router;
