"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updateUserRole = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;

var _user = _interopRequireDefault(require("../models/user.model"));

var _role = _interopRequireDefault(require("../models/role.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, email, password, roles, newUser, foundRoles, role, savedUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password, roles = _req$body.roles;
            _context.t0 = _user["default"];
            _context.t1 = email;
            _context.next = 6;
            return _user["default"].encryptPassword(password);

          case 6:
            _context.t2 = _context.sent;
            _context.t3 = {
              email: _context.t1,
              password: _context.t2
            };
            newUser = new _context.t0(_context.t3);

            if (!roles) {
              _context.next = 16;
              break;
            }

            _context.next = 12;
            return _role["default"].find({
              name: {
                $in: roles
              }
            });

          case 12:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 20;
            break;

          case 16:
            _context.next = 18;
            return _role["default"].findOne({
              name: 'user'
            });

          case 18:
            role = _context.sent;
            newUser.roles = [role._id];

          case 20:
            _context.next = 22;
            return newUser.save();

          case 22:
            savedUser = _context.sent;
            return _context.abrupt("return", res.status(200).json(savedUser));

          case 26:
            _context.prev = 26;
            _context.t4 = _context["catch"](0);
            res.status(500).json(_context.t4);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 26]]);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$query, page, perPage, options, users;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$query = req.query, page = _req$query.page, perPage = _req$query.perPage;
            options = {
              page: parseInt(page, 10) || 1,
              limit: parseInt(perPage, 10) || 10
            };
            _context2.next = 5;
            return _user["default"].paginate({}, options);

          case 5:
            users = _context2.sent;
            res.status(200).json(users);
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function getUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var getUserById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var userId, user;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            userId = req.params.userId;
            _context3.next = 4;
            return _user["default"].findById(userId).populate('roles');

          case 4:
            user = _context3.sent;
            res.status(200).json(user);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getUserById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var updateUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var userId, updatedUser, userSaved;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            userId = req.params.userId;
            _context4.next = 4;
            return _user["default"].findByIdAndUpdate(userId, req.body, {
              "new": true
            });

          case 4:
            updatedUser = _context4.sent;
            _context4.next = 7;
            return updatedUser.save();

          case 7:
            userSaved = _context4.sent;
            res.status(200).json(userSaved);
            _context4.next = 14;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json(_context4.t0);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 11]]);
  }));

  return function updateUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var updateUserRole = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var userId, _yield$Promise$all, _yield$Promise$all2, user, userRole, adminRole, userSaved;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            userId = req.params.userId;
            _context5.next = 4;
            return Promise.all([_user["default"].findById(userId), _role["default"].findOne({
              name: 'user'
            }), _role["default"].findOne({
              name: 'admin'
            })]);

          case 4:
            _yield$Promise$all = _context5.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
            user = _yield$Promise$all2[0];
            userRole = _yield$Promise$all2[1];
            adminRole = _yield$Promise$all2[2];
            if (user.roles.includes(userRole._id)) user.roles = [adminRole._id];else user.roles = [userRole._id];
            _context5.next = 12;
            return user.save();

          case 12:
            userSaved = _context5.sent;
            res.status(200).json(userSaved);
            _context5.next = 19;
            break;

          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json(_context5.t0);

          case 19:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 16]]);
  }));

  return function updateUserRole(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateUserRole = updateUserRole;

var deleteUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var userId;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            userId = req.params.userId;
            _context6.next = 4;
            return _user["default"].findByIdAndDelete(userId);

          case 4:
            res.status(200).json({
              message: 'User successfully deleted'
            });
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            res.status(500).json(_context6.t0);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function deleteUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;