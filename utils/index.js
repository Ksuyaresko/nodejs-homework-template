const validateContactFavorite = require("./validateContactFavorite");
const validateContactPut = require("./validateContactPut");
const errorWrap = require("./errorWrap");
const HttpError = require('./HttpError')

module.exports = {
  validateContactFavorite,
  validateContactPut,
  errorWrap,
  HttpError,
};
