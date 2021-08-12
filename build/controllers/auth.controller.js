"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _user = _interopRequireDefault(require("../models/user.model"));

var _role = _interopRequireDefault(require("../models/role.model"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var login = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      var user = yield _user.default.findOne({
        email: req.body.email
      }).select('email password roles');
      if (!user) return res.status(400).json({
        message: 'User not found'
      });
      var matchPassword = yield _user.default.comparePassword(req.body.password, user.password);
      if (!matchPassword) return res.status(401).json({
        message: 'Invalid password'
      });

      var token = _jsonwebtoken.default.sign({
        id: user._id
      }, _config.default.SECRET, {
        expiresIn: 86400
      });

      res.status(200).json({
        token
      });
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.login = login;