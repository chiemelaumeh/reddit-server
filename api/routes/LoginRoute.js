import express from "express"
const router = express.Router()
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


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
              res.cookie("token", token).json();
              console.log(token);
            } catch (err) {
              console.error(err.message);
              res.status(500);
            }
          });
        } else {
          res.status(422).send("invalid password");
          console.log("invalid password");
        }
      } else {
        res.status(422).send("Invalid username");
        console.log("invalid username");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  findUser();
});

export default router