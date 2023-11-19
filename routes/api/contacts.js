const express = require("express");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../../models/contacts");
const { validateContact, validateContactPut } = require("../../models/utils");

const router = express.Router();

router.get("/", listContacts);

router.get("/:contactId", getContactById);

router.post("/", validateContact, addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", validateContactPut, updateContact);

module.exports = router;
