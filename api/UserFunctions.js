import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import User from "./models/User.js";

const secret = process.env.SECRET_KEY;


export function getUserFromToken (token) {
  const userInfo =  jwt.verify(token, secret);
  return User.findById(userInfo.id);
};


// module.exports = getUserFromToken