import { registration } from "../Controllers/user.controller.js";
import express from "express";
import { upload } from "../MiddleWare/Multer.middleWare.js";
const userRoute = express.Router();

userRoute.get("/register", upload.single("avatar"), registration);
export default userRoute;
