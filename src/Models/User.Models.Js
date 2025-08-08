import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      lowercase: true,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      default: "https://example.com/default-avatar.png",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
