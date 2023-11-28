const express = require("express");
const { get, getById, create, update, remove, patch } = require("../../controller")
const { validateContact, validateContactPut, validateContactFavorite } = require("../../models/utils");

const router = express.Router();

router.get("/", get);

router.get("/:contactId", getById);

router.post("/", validateContact, create);

router.delete("/:contactId", remove);

router.put("/:contactId", validateContactPut, update);

router.patch("/:contactId/favorite", validateContactFavorite, patch);

module.exports = router;
