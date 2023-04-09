const User = require("../../models/auth.model");

const deleteUserById = async (req, res) => {
  let user = await User.findById(req.params.id);

  try {
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    let deleteUser = await User.findByIdAndDelete(req.params.id);

    return res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(504).send({ message: error.message });
  }
};

module.exports = deleteUserById;
