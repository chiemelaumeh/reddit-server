import express from "express";
const router = express.Router();
import { getUserFromToken } from "../server.js";

router.get("/", (req, res) => {
  const getUser = async () => {
    const token = req.cookies.token;
    try {
      const user = await getUserFromToken(token);
      res.json({ user });
    } catch (err) {
      console.error(err.message);
      res.status(500);
    }
  };

  getUser();
});

export default router;
