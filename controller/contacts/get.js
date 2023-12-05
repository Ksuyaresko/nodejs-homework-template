const { Contact } = require("../../models");

const get = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite = false } = req.query;
  const skip = (page - 1) * limit;
  const results = await Contact.find(
    { owner, ...(favorite ? { favorite } : {}) },
    "-createdAt -updatedAt",
    { skip, limit },
  ).populate("owner", "email");
  res.status(200).json(results);
};

module.exports = get;
