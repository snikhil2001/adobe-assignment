const User = require("../../models/auth.model");

const getUserById = async (req, res) => {
  let user = await User.findById(req.params.id);
  try {
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    return res.send({ user });
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

module.exports = getUserById;
