const User = require("../../models/auth.model");

const getAllUsers = async (req, res) => {
  let allUsers = await User.find();
  try {
    return res.status(200).send({ length: allUsers.length, allUsers });
  } catch (error) {
    return res.status(504).send({ message: error.message });
  }
};

module.exports = getAllUsers;
