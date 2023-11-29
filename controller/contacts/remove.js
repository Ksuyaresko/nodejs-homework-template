const service = require("../../service");
const remove = async (req, res, next) => {
  const result = await service.removeContact(req.params.id);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      message: `Not found task id: ${req.params.id}`,
    });
  }
};

module.exports = remove;
