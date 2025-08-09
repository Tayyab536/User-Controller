import express from "express";
import dotenv from "dotenv";
import userRoute from "./Routes/user.router.js";
const app = express();
const port = process.env.PORT || 4000;
dotenv.config({ path: "./.env" });
app.use(express.json()); // Parse JSON bodies
// app.use(express.urlencoded({ extended: true })); // Parse form data
// Define a route
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});
app.use("/api/v1/users" , userRoute) 

let startApp = () => {
  try {
    app.listen(port);
  } catch (error) {
    throw new error();
  }
};

export { startApp };
