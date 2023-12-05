const express = require("express");
const { Contact } = require("../../controller");
const {
  validateContactPut,
  validateContactFavorite,
  errorWrap,
} = require("../../utils");
const { validateBody, isValidId, authorization } = require("../../middlewares");
const { contactSchema } = require("../../models/schemas/contacts");

const router = express.Router();

router.get("/", authorization, errorWrap(Contact.get));

router.get("/:id", authorization, isValidId, errorWrap(Contact.getById));

router.post("/", authorization, validateBody(contactSchema), errorWrap(Contact.create));

router.delete("/:id", authorization, isValidId, errorWrap(Contact.remove));

router.put(
  "/:id",
  authorization,
  isValidId,
  validateContactPut,
  errorWrap(Contact.update),
);

router.patch(
  "/:id/favorite",
  authorization,
  isValidId,
  validateContactFavorite,
  errorWrap(Contact.patch),
);

module.exports = router;
