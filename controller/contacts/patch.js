const service = require("../../service");
const patch = async (req, res, next) => {
  const result = await service.updateContactStatus(
    req.params.id,
    req.body.favorite,
  );
  if (result) {
    res.json(result);
  } else {
    res.status(404).json({
      message: `Not found}`,
    });
  }
};

module.exports = patch;
