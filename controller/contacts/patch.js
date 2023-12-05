const { Contact } = require("../../models");
const patch = async (req, res, next) => {
  const result = await Contact.findByIdAndUpdate(
    { _id: req.id },
    { favorite: req.body.status },
    { new: true },
  );
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      message: `Not found`,
    });
  }
};

module.exports = patch;
