"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var userCtrl = _interopRequireWildcard(require("../controllers/user.controller"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();

var _require = require('express-validator'),
    check = _require.check;

router.post('/', check('email', 'Email is not valid').isEmail(), check('password', 'Password is empty').not().isEmpty(), _middlewares.authJWT.verifyToken, _middlewares.authJWT.isAdmin, _middlewares.checkSignup.checkDuplicateEmail, _middlewares.checkSignup.checkValidRoles, userCtrl.createUser);
router.get('/', _middlewares.authJWT.verifyToken, _middlewares.authJWT.isAdmin, userCtrl.getUsers);
router.get('/:userId', check('userId', 'The id is not correct').isMongoId(), _middlewares.authJWT.verifyToken, _middlewares.authJWT.isAdmin, userCtrl.getUserById);
router.put('/:userId', check('userId', 'The id is not correct').isMongoId(), _middlewares.validateBody, _middlewares.authJWT.verifyToken, _middlewares.authJWT.isAdmin, userCtrl.updateUser);
router.put('/:userId/status', check('userId', 'The id is not correct').isMongoId(), _middlewares.authJWT.verifyToken, _middlewares.authJWT.isAdmin, userCtrl.updateUserRole);
router["delete"]('/:userId', check('userId', 'The id is not correct').isMongoId(), _middlewares.authJWT.verifyToken, _middlewares.authJWT.isAdmin, userCtrl.deleteUser);
var _default = router;
exports["default"] = _default;