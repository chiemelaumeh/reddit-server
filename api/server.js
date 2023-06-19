import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import path from "path";
import {fileURLToPath} from 'url';

import User from "./models/User.js";
import Community from "./models/Community.js";
import Vote from "./models/Votes.js";
import Comment from "./models/Comments.js";

import RegisterRoute from "./routes/RegisterRoute.js";
import VotingRoutes from "./routes/VotingRoutes.js";
import CommunityRoutes from "./routes/CommunityRoute.js";
import UserRoute from "./routes/UserRoute.js";
import LogoutRoute from "./routes/LogoutRoute.js";
import PostCommentRoute from "./routes/PostCommentRoute.js";
import GetCommentsRoute from "./routes/GetCommentsRoute.js";
import DeleteCommentRoute from "./routes/DeleteCommentRoute.js";
import UploadRRoute from "./routes/UploadRoute.js";
import ImageRoute from "./routes/ImageRoute.js";
import LoginRoute from "./routes/LoginRoute.js"

import { connectDb } from "./config/db.js";
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://reddit-app-nw97.onrender.com"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
  
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", async (req, res) => {
  const comment = await Comment.find({
    rootId: { $exists: false },
  });
  res.status(200).json(comment);
});
app.use("/votes", VotingRoutes);
app.use("/communities", CommunityRoutes);
app.use("/register", RegisterRoute);
app.use("/user", UserRoute);
app.use("/logout", LogoutRoute);
app.use("/comments", PostCommentRoute);
app.use("/comments", GetCommentsRoute);
app.use("/delete", DeleteCommentRoute);
app.use("/upload", UploadRRoute);
app.use("/image", ImageRoute);
app.use("/login", LoginRoute)



// const __filename = fileURLToPath(import.meta.url);
// console.log(__filename)

// 👇️ "/home/borislav/Desktop/javascript"

// console.log('directory-name 👉️', __dirname);
// 👇️ "/home/borislav/Desktop/javascript/dist/index.html"
// console.log(path.join(__dirname, '/dist', 'index.html'))


// const __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
// app.use(express.static(path.join(__dirname, '../client/build')))
// app.get('*', (req, res)=> {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"))

// })
// } else {
//   app.get("/", (req, res) => {
//     res.send("myReddit API is running")
//   })
// }

connectDb();




const secret = process.env.SECRET_KEY
export const getUserFromToken = async (token) => {
  const userInfo = await jwt.verify(token, secret);
  return await User.findById(userInfo.id);
};


app.get("/", async (req, res) => {
  const comment = await Comment.find({
    rootId: { $exists: false },
  });
  res.status(200).json(comment);
});


// async function deleteAll() {
//   await Comment.deleteMany({
//     $expr: { $lt: [{ $strLenCP: "$body" }, 20] },
//   });

//   await Vote.deleteMany({
//     direction: { $exists: true },
//   });
//   await Community.deleteMany({
//     $expr: { $lt: [{ $strLenCP: "$avatar" }, 10] },
//   });
//   console.log("Deleted All");
// }
// 
// deleteAll();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
