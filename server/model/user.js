const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  image: {
    type: String,
  },
  googleId: {
    type: String,
    unique: true, // Ensure uniqueness for Google IDs
  },
  profileImage: {
    type: String,
    required: true,
  },
});

const User = model("User", UserSchema);
module.exports = User;
