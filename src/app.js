import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config({ path: "./.env" });
// Define a route
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});
const port = process.env.PORT || 4000;

let startApp = () => {
  try {
    app.listen(port);
  } catch (error) {
     throw new error
  }
};

export {startApp}