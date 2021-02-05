import path from "path";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import users from "./routes/users.js";
import types from "./routes/types.js";
import breeds from "./routes/breeds.js";
import authRoutes from "./routes/auth.js";
const __dirname = path.resolve();

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true
  })
);
app.use(cors());

//connect to mongodb
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Mongo Connected...server running on port: " + port))
  .catch(err => console.log(err.message));

//use routes
app.use("/api", authRoutes);
app.use("/api/types", types);
app.use("/api/users", users);
app.use("/api/breeds", breeds);

//render client
app.use(express.static(path.join(`${__dirname}`, "..", "client", "build")));
app.get("*", (req, res) => {
  res
    .set(
      "Content-Security-Policy",
      "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
    )
    .sendFile(path.join(`${__dirname}`, "..", "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
