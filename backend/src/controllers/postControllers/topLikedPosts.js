const Post = require("../../models/post.model");

const topLikedPosts = async (req, res) => {
  const LikedPosts = await Post.find()
    .sort({ likes: "desc" })
    .limit(5)
    .populate("userId");
  try {
    return res.status(200).send({ LikedPosts });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = topLikedPosts;
