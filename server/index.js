import express from "express";
import Connection from "./database/db.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import Routes from "./routes/route.js";
import cors from "cors";
const app = express();
dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
app.use("/", Routes);

Connection(USERNAME, PASSWORD);
app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
