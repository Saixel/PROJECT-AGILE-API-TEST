"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCustomer = exports.updateCustomer = exports.getCustomersByUpdater = exports.getCustomersByCreator = exports.getCustomerById = exports.getCustomers = exports.createCustomer = void 0;

var _customer = _interopRequireDefault(require("../models/customer.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createCustomer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, surname, photoUrl, newCustomer, customerSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, surname = _req$body.surname, photoUrl = _req$body.photoUrl;
            newCustomer = new _customer["default"]({
              name: name,
              surname: surname,
              photoUrl: photoUrl
            });
            newCustomer.createdBy = req.userId;
            _context.next = 6;
            return newCustomer.save();

          case 6:
            customerSaved = _context.sent;
            res.status(201).json(customerSaved);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500).json(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function createCustomer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createCustomer = createCustomer;

var getCustomers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$query, page, perPage, options, customers;

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
            return _customer["default"].paginate({}, options);

          case 5:
            customers = _context2.sent;
            res.status(200).json(customers);
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

  return function getCustomers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCustomers = getCustomers;

var getCustomerById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var customerId, customer;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            customerId = req.params.customerId;
            _context3.next = 4;
            return _customer["default"].findById(customerId).populate('createdBy').populate('updatedBy');

          case 4:
            customer = _context3.sent;
            res.status(200).json(customer);
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

  return function getCustomerById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getCustomerById = getCustomerById;

var getCustomersByCreator = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$query2, page, perPage, creatorId, options, customers;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$query2 = req.query, page = _req$query2.page, perPage = _req$query2.perPage;
            creatorId = req.params.creatorId;
            options = {
              page: parseInt(page, 10) || 1,
              limit: parseInt(perPage, 10) || 10
            };
            _context4.next = 6;
            return _customer["default"].paginate({
              createdBy: creatorId
            }, options);

          case 6:
            customers = _context4.sent;
            res.status(200).json(customers);
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json(_context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function getCustomersByCreator(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getCustomersByCreator = getCustomersByCreator;

var getCustomersByUpdater = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$query3, page, perPage, updaterId, options, customers;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _req$query3 = req.query, page = _req$query3.page, perPage = _req$query3.perPage;
            updaterId = req.params.updaterId;
            options = {
              page: parseInt(page, 10) || 1,
              limit: parseInt(perPage, 10) || 10
            };
            _context5.next = 6;
            return _customer["default"].paginate({
              updatedBy: updaterId
            }, options);

          case 6:
            customers = _context5.sent;
            res.status(200).json(customers);
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json(_context5.t0);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));

  return function getCustomersByUpdater(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getCustomersByUpdater = getCustomersByUpdater;

var updateCustomer = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var customerId, updatedCustomer, customerSaved;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            customerId = req.params.customerId;
            _context6.next = 4;
            return _customer["default"].findByIdAndUpdate(customerId, req.body, {
              "new": true
            });

          case 4:
            updatedCustomer = _context6.sent;
            updatedCustomer.updatedBy = req.userId;
            _context6.next = 8;
            return updatedCustomer.save();

          case 8:
            customerSaved = _context6.sent;
            res.status(200).json(customerSaved);
            _context6.next = 15;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            res.status(500).json(_context6.t0);

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 12]]);
  }));

  return function updateCustomer(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateCustomer = updateCustomer;

var deleteCustomer = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var customerId;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            customerId = req.params.customerId;
            _context7.next = 4;
            return _customer["default"].findByIdAndDelete(customerId);

          case 4:
            res.status(200).json({
              message: 'User successfully deleted'
            });
            _context7.next = 10;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            res.status(500).json(_context7.t0);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function deleteCustomer(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteCustomer = deleteCustomer;