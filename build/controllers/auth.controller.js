"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _user = _interopRequireDefault(require("../models/user.model"));

var _role = _interopRequireDefault(require("../models/role.model"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var login = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var user, matchPassword, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _user["default"].findOne({
              email: req.body.email
            }).select('email password roles');

          case 3:
            user = _context.sent;

            if (user) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'User not found'
            }));

          case 6:
            _context.next = 8;
            return _user["default"].comparePassword(req.body.password, user.password);

          case 8:
            matchPassword = _context.sent;

            if (matchPassword) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              message: 'Invalid password'
            }));

          case 11:
            token = _jsonwebtoken["default"].sign({
              id: user._id
            }, _config["default"].SECRET, {
              expiresIn: 86400
            });
            res.status(200).json({
              token: token
            });
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            res.status(500).json(_context.t0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.login = login;