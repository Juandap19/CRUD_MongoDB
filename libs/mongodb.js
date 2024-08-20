import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:123@sid2-db.xmk0lvq.mongodb.net/");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
