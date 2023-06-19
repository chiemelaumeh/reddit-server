import express from "express";
const router = express.Router();
router.get("/", (req, res) => {
  res.clearCookie("token", "").send("Successfully logged out");
  console.log("Successfully logged out");
})
export default router