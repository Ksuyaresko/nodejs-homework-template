const { Contact } = require("../../models");
const update = async (req, res, next) => {
  const result = await Contact.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
  );
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      message: `Not found task id: ${req.params.id}`,
    });
  }
};

module.exports = update;
