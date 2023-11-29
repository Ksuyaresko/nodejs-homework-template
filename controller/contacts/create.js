const service = require("../../service");
const create = async (req, res, next) => {
  const result = await service.createContact(req.body);
  res.status(201).json(result);
};

module.exports = create;
