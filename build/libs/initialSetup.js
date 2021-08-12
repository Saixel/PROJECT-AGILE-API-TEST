"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAdmin = exports.createRoles = void 0;

var _user = _interopRequireDefault(require("../models/user.model"));

var _role = _interopRequireDefault(require("../models/role.model"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    try {
      var count = yield _role.default.estimatedDocumentCount(); // Check for existing roles

      if (count > 0) return; // Create default roles

      var values = yield Promise.all([new _role.default({
        name: 'user'
      }).save(), new _role.default({
        name: 'admin'
      }).save()]);
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  });

  return function createRoles() {
    return _ref.apply(this, arguments);
  };
}();

exports.createRoles = createRoles;

var createAdmin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* () {
    try {
      // Check for existing admin
      var user = yield _user.default.findOne({
        email: 'admin@apitest'
      }); // Get admin role id

      var role = yield _role.default.find({
        name: 'admin'
      });

      if (!user) {
        // Create a new admin user
        yield _user.default.create({
          name: 'admin',
          email: 'admin@apitest',
          password: yield _bcryptjs.default.hash('admin', 10),
          roles: [role[0]._id]
        });
        console.log('Admin created!');
      }
    } catch (error) {
      console.error(error);
    }
  });

  return function createAdmin() {
    return _ref2.apply(this, arguments);
  };
}();

exports.createAdmin = createAdmin;