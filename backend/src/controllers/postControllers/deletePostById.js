const Post = require("../../models/post.model");

const deletePostById = async (req, res) => {
  let post = await Post.findById(req.params.id);

  try {
    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }
    post = await Post.findByIdAndDelete(req.params.id);
    return res.status(200).send({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = deletePostById;
