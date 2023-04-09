const User = require("../../models/auth.model");
const Post = require("../../models/post.model");

const getTopActiveUsers = async (req, res) => {
  let activeUsers = await Post.aggregate([
    { $group: { _id: "$userId", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: 5 },
  ]);

  let arr = [];

  for (let i = 0; i < activeUsers.length; i++) {
    let user = await User.findOne({ _id: activeUsers[i]._id });
    arr.push({ noOfPosts: activeUsers[i].count, user });
  }

  return res.status(200).send(arr);
};

module.exports = getTopActiveUsers;
