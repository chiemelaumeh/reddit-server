import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import User from "../models/User.js";

router.post("/", (req, res) => {
  const { newPass, userEmail } = req.body;

  const changePass =  async() => {
    try {
      const newPassword = await bcrypt.hashSync(newPass, 10)
      const user = await User.findOneAndUpdate({ email:userEmail }, {password:newPassword}, {returnDocument: "after"})
      // console.log(newPassword)
      // console.log(user)

      res.status(200).json({passUpdated:true});
    } catch (error) {
      
    }
   

  };
  changePass();
});


export default router