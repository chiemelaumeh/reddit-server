import express from "express";
const router = express.Router();
import dotenv from "dotenv";
dotenv.config();
import User from "../models/User.js";
import Token from "../models/Token.js";
import { sendEmail } from "../utils/sendEmail.js";
import { sendOtp } from "../utils/sendOTP.js";
import crypto from "crypto";

const secret = process.env.SECRET_KEY;

router.post("/", (req, res) => {
  const { email, randomCode } = req.body;
  const getRecoveryEmail = async () => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        res.send("No account associated with that email");
        return;
      }
      if (!user.verified) {
        let token = await Token.findOne({ userId: user._id });
        if (!token) {
          const emailToken = await new Token({
            userId: user._id,
            token: crypto.randomBytes(32).toString("hex"),
          }).save();
          const url = `
        ${process.env.BASE_URL}users/${user._id}/verify/${emailToken.token}`;

          await sendEmail(user.email, "Verify myReddit Email", url);
        }

        res.json(
          "Please verify your e-mail before you can reset password. We have sent a verification link to your email"
        );
      } else {

        console.log(randomCode)
        await sendOtp(user.email," myReddit OTP", randomCode)
        res.status(200).json(
          {randomCode: randomCode, otpVerified:true, email:user.email}
         
        );

      }
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  };
  getRecoveryEmail();
});

export default router;
