import mongoose from "mongoose";
export const dbConnect = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.log(err));
};
