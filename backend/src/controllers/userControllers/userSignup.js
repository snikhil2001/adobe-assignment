const User = require("../../models/auth.model");

const userSignup = async (req, res) => {
  const { name, email, bio } = req.body;
  const user = await User.findOne({ email });

  try {
    if (user) {
      return res
        .status(200)
        .send({ message: "user already exists", userId: user._id });
    }

    let newUser = await User.create({
      name,
      email,
      bio,
    });

    return res.status(201).send({
      message: "user created successfully",
      userId: newUser._id,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = userSignup;
