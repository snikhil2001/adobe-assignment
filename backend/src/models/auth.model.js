const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    name: { type: String, min: 1, max: 50 },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    bio: { type: String, min: 1, max: 500 },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", authSchema);

module.exports = User;
