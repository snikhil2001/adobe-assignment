const Post = require("../../models/post.model");

const getAllPosts = async (req, res) => {
  let allPosts = await Post.find();
  try {
    return res.status(200).send({ length: allPosts.length, allPosts });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

module.exports = getAllPosts;
