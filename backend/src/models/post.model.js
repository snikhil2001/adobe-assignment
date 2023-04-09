const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  content: { type: String, min: 1, max: 300 },
  likes: { type: Number, min: 0, default: 0 },
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
