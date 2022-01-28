import mongoose from "mongoose";

const connectDb = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log("Mongo DB connected");
  } catch (error) {
    console.log("DB connection error");
    console.log(error);
  }
};

export default connectDb;
