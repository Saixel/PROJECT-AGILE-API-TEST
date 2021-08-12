"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteCustomer = exports.updateCustomer = exports.getCustomersByUpdater = exports.getCustomersByCreator = exports.getCustomerById = exports.getCustomers = exports.createCustomer = void 0;

var _customer = _interopRequireDefault(require("../models/customer.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createCustomer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      var {
        name,
        surname,
        photoUrl
      } = req.body;
      var newCustomer = new _customer.default({
        name,
        surname,
        photoUrl
      });
      newCustomer.createdBy = req.userId;
      var customerSaved = yield newCustomer.save();
      res.status(201).json(customerSaved);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return function createCustomer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createCustomer = createCustomer;

var getCustomers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        page,
        perPage
      } = req.query;
      var options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 10
      };
      var customers = yield _customer.default.paginate({}, options);
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return function getCustomers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCustomers = getCustomers;

var getCustomerById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        customerId
      } = req.params;
      var customer = yield _customer.default.findById(customerId).populate('createdBy').populate('updatedBy');
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return function getCustomerById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getCustomerById = getCustomerById;

var getCustomersByCreator = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        page,
        perPage
      } = req.query;
      var {
        creatorId
      } = req.params;
      var options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 10
      };
      var customers = yield _customer.default.paginate({
        createdBy: creatorId
      }, options);
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return function getCustomersByCreator(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getCustomersByCreator = getCustomersByCreator;

var getCustomersByUpdater = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        page,
        perPage
      } = req.query;
      var {
        updaterId
      } = req.params;
      var options = {
        page: parseInt(page, 10) || 1,
        limit: parseInt(perPage, 10) || 10
      };
      var customers = yield _customer.default.paginate({
        updatedBy: updaterId
      }, options);
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return function getCustomersByUpdater(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getCustomersByUpdater = getCustomersByUpdater;

var updateCustomer = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        customerId
      } = req.params;
      var updatedCustomer = yield _customer.default.findByIdAndUpdate(customerId, req.body, {
        new: true
      });
      updatedCustomer.updatedBy = req.userId;
      var customerSaved = yield updatedCustomer.save();
      res.status(200).json(customerSaved);
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return function updateCustomer(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateCustomer = updateCustomer;

var deleteCustomer = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        customerId
      } = req.params;
      yield _customer.default.findByIdAndDelete(customerId);
      res.status(200).json({
        message: 'User successfully deleted'
      });
    } catch (error) {
      res.status(500).json(error);
    }
  });

  return function deleteCustomer(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteCustomer = deleteCustomer;