import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/userRouter.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/user', router)

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.mongo_url);
  console.log("here");
}

app.listen(process.env.port, () => {});
