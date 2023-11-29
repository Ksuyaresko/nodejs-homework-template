const service = require("../../service");
const update = async (req, res, next) => {
  const result = await service.updateContact(req.params.id, req.body);
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      message: `Not found task id: ${req.params.id}`,
    });
  }
};

module.exports = update;
