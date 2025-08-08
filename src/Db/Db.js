import { DataBaseName } from "../constraints.js";
import mongoose from "mongoose";
const dataBaseConnection = async () => {
  try {


    const connection =await mongoose.connect(
      `${process.env.DATAbASESTRING}/${DataBaseName}`
    );
    console.log("Db is connected");
  } catch (error) {
    throw new error();
  }
};

export { dataBaseConnection };
