const { Contact } = require("../../models");
const getById = async (req, res, next) => {
  const contactData = await Contact.findOne(req.params.id);

  if (contactData === null) {
    res.status(404).json({ message: "Not found" });
  }
  res.json(contactData);
};

module.exports = getById;
