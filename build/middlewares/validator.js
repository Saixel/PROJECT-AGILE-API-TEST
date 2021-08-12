"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateBody = void 0;

var {
  validationResult
} = require('express-validator');

var validateBody = (req, res, next) => {
  var errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors);
  next();
};

exports.validateBody = validateBody;