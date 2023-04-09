const User = require("../../models/auth.model");
const Post = require("../../models/post.model");

const createPost = async (req, res) => {
  const { userId, content } = req.body;
  let newPost = await Post.create({ userId, content });
  try {
    return res.status(200).send({ message: "Post created successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = createPost;
