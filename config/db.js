import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.set("strictQuery", false);
const connectionString = process.env.DATABASE_URL;

export const connectDb = async() => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  
    });
    const db = mongoose.connection;
    db.on("error", console.log);
    
  } catch (error) {
    console.error(error.message)
  }
}

