import express from "express";
import { registration } from "../Controllers/user.controller.js";
const userRoute = express.Router();

userRoute.get("/register", registration);
export default userRoute;
