const service = require("../../service");
const getById = async (req, res, next) => {
  const contactData = await service.getContactById(req.params.id);

  if (contactData === null) {
    res.status(404).json({ message: "Not found" });
  }
  res.json(contactData);
};

module.exports = getById;
