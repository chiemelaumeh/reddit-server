import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";

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
import UploadRoute from "./routes/UploadRoute.js";
import ImageRoute from "./routes/ImageRoute.js";
import LoginRoute from "./routes/LoginRoute.js";
import EmailTokenRoute from "./routes/EmailTokenRoute.js"
import CheckRecoveryEmailRoute from  "./routes/CheckRecoveryEmailRoute.js"
import ChangePasswordRoute from "./routes/ChangePasswordRoute.js"
import Token from "./models/Token.js";

import { connectDb } from "./config/db.js";

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// app.use(cors())

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(
  cors({
    origin: [

      "https://chiemela-postboard.netlify.app",
      // "http://localhost:3000"
      "http://ec2-18-226-159-208.us-east-2.compute.amazonaws.com:8091"
    
    
    ],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.set("trust proxy", 1);
app.use("/votes", VotingRoutes);
app.use("/communities", CommunityRoutes);
app.use("/register", RegisterRoute);
app.use("/user", UserRoute);
app.use("/logout", LogoutRoute);
app.use("/comments", PostCommentRoute);
app.use("/comments", GetCommentsRoute);
app.use("/delete", DeleteCommentRoute);
app.use("/upload", UploadRoute);
app.use("/image", ImageRoute);
app.use("/login", LoginRoute);
app.use("/users", EmailTokenRoute)
app.use("/send_recovery_email", CheckRecoveryEmailRoute)
app.use("/change_password", ChangePasswordRoute)

// import express from "express"
// const router = express.Router()


connectDb();

const secret = process.env.SECRET_KEY;
export const getUserFromToken = async (token) => {
  const userInfo = await jwt.verify(token, secret);
  return await User.findById(userInfo.id);
};

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });
// } else {

  app.get("/", (req, res) => {
    res.send('<h1> myReddit App has moved here ---> <a href="https://chiemela-postboard.netlify.app/">myRedditApp</a></h1>\n');
  });
// }


// app.get("/f", (req, res) => {
//   res.send("myReddit we API is running");
// });

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/public")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/public/index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("myReddit API is running");
//   });
// }
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}...`);
});