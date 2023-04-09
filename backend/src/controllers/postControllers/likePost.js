const Post = require("../../models/post.model");

const likePost = async (req, res) => {
  const { id } = req.params;

  let post = await Post.findById(id);

  if (!post) {
    return res.status(404).send({ message: "Post not found" });
  }

  let likedPost = await Post.findByIdAndUpdate(id, { likes: post.likes + 1 });
  return res.status(200).send({ message: "You have liked a post" });
};

module.exports = likePost;
