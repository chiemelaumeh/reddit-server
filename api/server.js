import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";

// app.use(cors());
// // allowing cors
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

mongoose.set("strictQuery", false);
await mongoose.connect("mongodb://localhost:27017/reddit", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.log);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "localhost:3000",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("ok");
});

app.post("register", (req, res) => {
  const {email, password, username} = req.body
});

app.listen(4000, () => {
  console.log("Listening on Port 4000");
});
