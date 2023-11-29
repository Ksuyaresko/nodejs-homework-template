const express = require("express");
const {
  get,
  getById,
  create,
  update,
  remove,
  patch,
} = require("../../controller");
const {
  validateContactPut,
  validateContactFavorite,
  errorWrap,
  isValidId,
} = require("../../utils");
const validateBody = require("../../service/schemas/validateBody");

const router = express.Router();

router.get("/", errorWrap(get));

router.get("/:id", isValidId, errorWrap(getById));

router.post("/", validateBody, errorWrap(create));

router.delete("/:id", isValidId, errorWrap(remove));

router.put("/:id", isValidId, validateContactPut, errorWrap(update));

router.patch("/:id/favorite", isValidId, validateContactFavorite, errorWrap(patch));

module.exports = router;
