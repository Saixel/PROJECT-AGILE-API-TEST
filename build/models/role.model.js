"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ROLES = void 0;

var _mongoose = require("mongoose");

var ROLES = ['user', 'admin'];
exports.ROLES = ROLES;
var roleSchema = new _mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 10,
    unique: true,
    required: true
  }
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Role', roleSchema);

exports.default = _default;