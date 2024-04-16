import express from "express";
import https from "https";
import fs from "fs";
import cors from "cors";
import "dotenv/config";
import router from "./routes/router.js";
import logger from "./middlewares/logger.js";
import cookieParser from "cookie-parser";

const app = express();
const options = {
  key: fs.readFileSync("./src/utils/SSL-Certificate/127.0.0.1-key.pem"),
  cert: fs.readFileSync("./src/utils/SSL-Certificate/127.0.0.1.pem"),
};
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: "127.0.0.1",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser("rahasia"));
app.use(logger);
app.use("/", router);
app.get("/", (req, res) => {
  res.json({ status: "success" });
});
app.get("/index", (req, res) => {
  res.json({
    status: "success",
  });
});
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not Found",
    data: null,
  });
});
https.createServer(options, app).listen(process.env.SERVER_PORT, () => {
  console.log("Server Running");
});
