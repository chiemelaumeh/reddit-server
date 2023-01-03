import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import User from "./models/User.js";
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    // methods:["GET", "POST"],
    credentials: true,
  })
);


// app.use(cors());
// // allowing cors
// // app.use((req, res, next) => {
// //   res.header("Access-Control-Allow-Origin", "*");
// //   res.header("Access-Control-Allow-Methods", "*");
// //   res.header(
// //     "Access-Control-Allow-Headers",
// //     "Origin, X-Requested-With, Content-Type, Accept"
// //   );
// //   next();
// // });

mongoose.set("strictQuery", false);
await mongoose.connect("mongodb://localhost:27017/reddit", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.log);




app.get("/", (req, res) => {
  res.send("ok");
});

app.post("/register", async (req, res) => {
  const { email, username } = req.body;
  const password = bcrypt.hashSync(req.body.password, 10);
  // const password = bcrypt.genSalt(10, function(err, salt) {
  //   bcrypt.hash(req.body.password, salt, function(err, hash) {
  //             // Store hash in database here
  //    });
  // });
  const user = new User({
    email,
    username,
    password,
  });
  try {
  //  const info = await user.save()
  //  console.log(info)
  //   res.status(500)
    res.send("hit")
 
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

app.listen(4000, () => {
  console.log("Listening on Port 4000");
});
