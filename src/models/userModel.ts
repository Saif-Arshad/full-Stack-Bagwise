import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  isVerified:{
    type: Boolean,
    default: false,
  },
  gender:{
    type: String,
  },
  avatar: {
    type: String,
  },
  address:{
    type:String
  }
});
export const User = mongoose.models.User || mongoose.model("User", userSchema);