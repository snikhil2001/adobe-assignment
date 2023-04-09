const User = require("../../models/auth.model");
const Post = require("../../models/post.model");

const createPost = async (req, res) => {
  const { userId, content } = req.body;
  let user = await User.findOne({ _id: userId });
  let newPost = await Post.create({ name: user.name, content });
  try {
    return res.status(200).send({ message: "Post created successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = createPost;
