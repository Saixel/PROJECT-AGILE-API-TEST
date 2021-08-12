"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkValidRoles = exports.checkDuplicateEmail = void 0;

var _user = _interopRequireDefault(require("../models/user.model"));

var _role = require("../models/role.model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checkDuplicateEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      var email = yield _user.default.findOne({
        email: req.body.email
      });
      if (email) return res.status(400).json({
        message: 'Email already in use'
      });
      next();
    } catch (error) {
      res.status(500).json({
        message: error
      });
    }
  });

  return function checkDuplicateEmail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkDuplicateEmail = checkDuplicateEmail;

var checkValidRoles = (req, res, next) => {
  if (req.body.roles) {
    for (var i = 0; i < req.body.roles.length; i++) {
      if (!_role.ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: 'Role does not exists'
        });
      }
    }
  }

  next();
};

exports.checkValidRoles = checkValidRoles;