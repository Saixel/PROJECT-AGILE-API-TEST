"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/agile-test',
  PORT: process.env.PORT || 3000,
  SECRET: 'customers-api-secret'
};
exports["default"] = _default;