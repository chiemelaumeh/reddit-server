import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "./models/User.js";
import Community from "./models/Community.js";
import Vote from "./models/Votes.js";
import Comment from "./models/Comments.js";
import cloudinary from "./cloudinary.js";

import RegisterRoute from "./routes/RegisterRoute.js";
import VotingRoutes from "./routes/VotingRoutes.js";
import CommunityRoutes from "./routes/CommunityRoute.js";
import UserRoute from "./routes/UserRoute.js";
import LogoutRoute from "./routes/LogoutRoute.js";
import PostCommentRoute from "./routes/PostCommentRoute.js";
import GetCommentsRoute from "./routes/GetCommentsRoute.js";
import DeleteCommentRoute from "./routes/DeleteCommentRoute.js";

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
app.use(VotingRoutes);
app.use(CommunityRoutes);
app.use(RegisterRoute);
app.use(UserRoute);
app.use(LogoutRoute);
app.use(PostCommentRoute);
app.use(GetCommentsRoute);
app.use(DeleteCommentRoute);


const connectionString = process.env.DATABASE_URL;
const secret = process.env.SECRET_KEY;

export const getUserFromToken = async (token) => {
  const userInfo = await jwt.verify(token, secret);
  return await User.findById(userInfo.id);
};

mongoose.set("strictQuery", false);
await mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.log);

app.get("/", async (req, res) => {
  const comment = await Comment.find({
    rootId: { $exists: false },
  });
  res.status(200).json(comment);
});

app.post("/upload", async(req, res) => {
  try {
    const fileStr = req.body.base64EncodedImage;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "ml-default"
    })

    console.log(uploadedResponse)
    res.json({msg: "YAYYYA"})
  } catch (error) {
    console.error(error);
    res.status(500).json({err: "Something wnt wrong"})
  }
});

app.post("/login", (req, res) => {
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

async function deleteAll() {
  await Comment.deleteMany({
    $expr: { $lt: [{ $strLenCP: "$body" }, 20] },
  });

  await Vote.deleteMany({
    direction: { $exists: true },
  });
  await Community.deleteMany({
    $expr: { $lt: [{ $strLenCP: "$avatar" }, 10] },
  });
  console.log("Deleted All");
}

// deleteAll();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
