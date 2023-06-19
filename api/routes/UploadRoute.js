import express from "express"
const router = express.Router()
import cloudinary from "../cloudinary.js"
import User from "../models/User.js";


router.post("/", async (req, res) => {
  const user = req.body.user.username;

  const fileStr = req.body.base64EncodedImage;

  try {
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "ml-default",
      allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
    });

    const onePublicId = uploadedResponse.public_id;
    const updatedPicture = await User.findOneAndUpdate(
      { username: user },
      { picture: onePublicId },
      { returnDocument: "after" }
    );
    res.json(onePublicId);
  } catch (error) {
    console.error(error);
  }
});

export default router