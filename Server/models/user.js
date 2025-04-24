const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,  // ✅ Corrected from "string" to "String"
    required: true,
    trim: true
  },
  lastName: {
    type: String,  // ✅ Corrected
    required: true,
    trim: true
  },
  email: {
    type: String,  // ✅ Corrected
    required: true,
    unique: true
  },
  password: {
    type: String,  // ✅ Corrected
    required: true
  },
  confirmPassword: {
    type: String,  // ✅ Corrected
    required: true
  }
});

module.exports = mongoose.model("User", userSchema); // ✅ Capitalized "User" for convention
