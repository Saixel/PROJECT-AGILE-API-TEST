"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAdmin = exports.createRoles = void 0;

var _user = _interopRequireDefault(require("../models/user.model"));

var _role = _interopRequireDefault(require("../models/role.model"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var count, values;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _role["default"].estimatedDocumentCount();

          case 3:
            count = _context.sent;

            if (!(count > 0)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return Promise.all([new _role["default"]({
              name: 'user'
            }).save(), new _role["default"]({
              name: 'admin'
            }).save()]);

          case 8:
            values = _context.sent;
            console.log(values);
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function createRoles() {
    return _ref.apply(this, arguments);
  };
}();

exports.createRoles = createRoles;

var createAdmin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var user, role;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _user["default"].findOne({
              email: 'admin@apitest'
            });

          case 3:
            user = _context2.sent;
            _context2.next = 6;
            return _role["default"].find({
              name: 'admin'
            });

          case 6:
            role = _context2.sent;

            if (user) {
              _context2.next = 17;
              break;
            }

            _context2.t0 = _user["default"];
            _context2.next = 11;
            return _bcryptjs["default"].hash('admin', 10);

          case 11:
            _context2.t1 = _context2.sent;
            _context2.t2 = [role[0]._id];
            _context2.t3 = {
              name: 'admin',
              email: 'admin@apitest',
              password: _context2.t1,
              roles: _context2.t2
            };
            _context2.next = 16;
            return _context2.t0.create.call(_context2.t0, _context2.t3);

          case 16:
            console.log('Admin created!');

          case 17:
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t4 = _context2["catch"](0);
            console.error(_context2.t4);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 19]]);
  }));

  return function createAdmin() {
    return _ref2.apply(this, arguments);
  };
}();

exports.createAdmin = createAdmin;