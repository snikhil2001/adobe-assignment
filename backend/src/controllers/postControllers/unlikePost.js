const Post = require("../../models/post.model");

const unlikePost = async (req, res) => {
  const { id } = req.params;

  let post = await Post.findById(id);

  if (!post) {
    return res.status(404).send({ message: "Post not found" });
  }

  if (post.likes === 0) {
    return res.status(404).send({ message: "You cannot dislike now" });
  }

  let likedPost = await Post.findByIdAndUpdate(id, { likes: post.likes - 1 });
  return res.status(200).send({ message: "You have unliked a post" });
};

module.exports = unlikePost;
