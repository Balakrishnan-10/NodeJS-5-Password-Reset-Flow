import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/Config.js";
import userRouter from "./Routers/UserRouter.js";

dotenv.config();

const app = express();

//Middlewares:
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//DB Connection :
connectDB();

//Default Route :
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Authentication app");
});

//User Route :
app.use("/api", userRouter);

app.listen(process.env.PORT, () => {
  console.log("App is listening to the port");
});
