const User = require("../../models/auth.model");

const updateUserById = async (req, res) => {
  let { name, bio } = req.body;
  let user = await User.findById(req.params.id);

  try {
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    let updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email: user.email,
        password: user.password,
        bio,
      },
      { new: true }
    );
    return res.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    return res.status(504).send({ message: error.message });
  }
};

module.exports = updateUserById;
