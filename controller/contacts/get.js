const service = require("../../service");

const get = async (req, res, next) => {
  const results = await service.getAllcontacts();
  res.status(200).json(results);
};

module.exports = get;
