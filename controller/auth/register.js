const bcrypt = require("bcrypt");
const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../utils");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { BASE_URL } = process.env;

const register = async (req, res, next) => {
  const { email, password } = req.body;
  const duplicate = await User.findOne({ email });
  if (duplicate) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const verificationCode = nanoid();
  const avatarURL = gravatar.profile_url(email);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    subscription: "starter",
    avatarURL,
    verificationCode,
  });
  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/users/verify/${verificationCode}">Click verify email</a>`
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
      avatarURL,
    },
  });
};

module.exports = register;
