const { Contact } = require("../../models");
const remove = async (req, res, next) => {
  const result = await Contact.findOneAndDelete({ _id: req.params.id });
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      message: `Not found task id: ${req.params.id}`,
    });
  }
};

module.exports = remove;
