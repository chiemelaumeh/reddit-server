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
import Comment from "./models/Comments.js";
import VotingRoutes from "./routes/VotingRoutes.js";
import CommunityRoutes from "./routes/CommunityRoute.js"
import Community from "./models/Community.js";
// import Vote from "./models/Votes.js";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://reddit-app-nw97.onrender.com"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const secret = process.env.SECRET_KEY;
const connectionString = process.env.DATABASE_URL;

app.use(VotingRoutes);
app.use(CommunityRoutes)

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

app.post("/register", async (req, res) => {
  const { email, username } = req.body;
  const findUser = await User.exists({ username });
  if (findUser) {
    res.send("Username taken. Try again.");
    console.log("Username taken. Try again.");
  } else {
    const password = bcrypt.hashSync(req.body.password, 10);
      const user = new User({
        email,
        username,
        password,
      });
      try {
        const info = await user.save();
        res
          .status(201)
          .send(`profile created for ${username}, now please Log in!`);
        console.log(`profile created for ${username}, now please Log in!`);

        // jwt.sign({ id: user._id }, secret, (err, token) => {
        //   if (err) {
        //     console.log(err);
        //     res.status(500);
        //   } else {
        //     // console.log(token);
        //     res.status(201).cookie("token", token).send();
        //   }
        // });
      } catch (error) {
        console.error(error.message);

        res.status(500);
      };
  }
  // if (user.username === username && user.password === password) {
  // }
});

app.get("/user", (req, res) => {
  const getUser = async () => {
    const token = req.cookies.token;
    try {
      const user = await getUserFromToken(token);
      // res.clearCookie("token", "").send();

      res.json({ username: user.username });
    } catch (err) {
      // console.log("error45")
      console.error(err.message);
      res.status(500);
    }
  };

  getUser();
});

app.get("/logout", (req, res) => {
  res.clearCookie("token", "").send("Successfully logged out");
  console.log("Successfully logged out");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const findUser = async () => {
    try {
      const user = await User.findOne({ username });
      // console.log(user);
      // res.json(user)
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

app.post("/comments", async (req, res) => {
  const token = req.cookies.token;
  try {
    const userInfo = await getUserFromToken(token);
    const { title, body, parentId, rootId, community } = req.body;
    console.log(req.body)
    const comment = new Comment({
      title,
      body,
      chosenCommunity,
      author: userInfo.username,
      postedAt: Date.now(),
      parentId,
      rootId,
    });
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/comments", async (req, res) => {
  const {search, community} = req.query
  const filter = search
    ? { title: { $regex: ".*" + search + ".*" } }
    : { rootId: null };

    if (community) {
      filter.community = community
    }

  try {
    const comments = await Comment.find(filter).sort({ postedAt: -1 });
    res.json(comments);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/comments/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/comments/root/:rootId", async (req, res) => {
  try {
    const comments = await Comment.find({ rootId: req.params.rootId }).sort({
      postedAt: -1,
    });
    res.json(comments);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/comments/parent/:parentId", async (req, res) => {
  try {
    const comments = await Comment.find({ parentId: req.params.parentId });
    res.json(comments);
  } catch (err) {
    console.error(err.message);
  }
});

async function myFinder () {
  const showCommunities = await Comment.find({
  community: {$exists: true}
  })
  console.log(showCommunities)
}

// myFinder()

 async function deleteAll() {
  await Comment.deleteMany({
    // body: { $exists: true },
     $expr: { $lt: [ { $strLenCP: "$body" }, 20 ] },
  });

//  Vote.deleteMany({
//     direction: { $exists: true },
//   });
//  await Community.deleteMany({
//   // name: { $exists: true}
//       $expr: { $lt: [ { $strLenCP: "$avatar" }, 10 ] },
//  })
  console.log("Deleted All");
}

// deleteAll()
app.listen(4000, () => {
  console.log("Listening on Port 4000");
});
