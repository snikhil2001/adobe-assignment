const Post = require("../../models/post.model");

const getPostById = async (req, res) => {
  let postById = await Post.findById(req.params.id);
  try {
    if (!postById) {
      return res.status(404).send({ message: "Post not found" });
    }
    return res.status(200).send({ post: postById });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = getPostById;
