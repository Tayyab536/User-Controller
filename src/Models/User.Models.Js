import mongoose from "mongoose";
import bcrypt from "bcrypt";
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

userSchema.pre("save", function (next) {
  if (!this.isModified(this.password)) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async (password) => {
  const isPasswordCorrect =await bcrypt.compare(this.password, password);
  if (isPasswordCorrect) {
      return   isPasswordCorrect
  }
};
const User = mongoose.model("User", userSchema);

export default User;
