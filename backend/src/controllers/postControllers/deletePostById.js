const Post = require("../../models/post.model");

const deletePostById = async (req, res) => {
  let post = await Post.findById(req.params.id);

  try {
    post = await Post.findByIdAndDelete(req.params.id);
    return res.status(200).send({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = deletePostById;
