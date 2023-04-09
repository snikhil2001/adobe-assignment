const Post = require("../../models/post.model");

const updatePostById = async (req, res) => {
  let post = await Post.findById(req.params.id);
  let { content, userId } = req.body;
  try {
    if (!content) {
      content = post.content;
    }
    post = await Post.findByIdAndUpdate(req.params.id, {
      userId,
      content: content,
      likes: post.likes,
    });
    return res.status(200).send({ message: "Post updated successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = updatePostById;
