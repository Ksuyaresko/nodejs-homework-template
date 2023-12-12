const bcrypt = require("bcrypt");
const { User } = require("../../models");
const { HttpError } = require("../../utils");
const gravatar = require('gravatar');

const register = async (req, res, next) => {
  const { email, password } = req.body;
  const duplicate = await User.findOne({ email });
  if (duplicate) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.profile_url(email);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    subscription: "starter",
    avatarURL,
  });
  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
      avatarURL,
    },
  });
};

module.exports = register;
