"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _customers = _interopRequireDefault(require("./routes/customers.routes"));

var _initialSetup = require("./libs/initialSetup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
(0, _initialSetup.createRoles)();
(0, _initialSetup.createAdmin)(); // Settings

app.set('port', process.env.PORT || 3000); // Middlewares

app.use((0, _cors.default)());
app.use((0, _helmet.default)());
app.use((0, _morgan.default)('dev'));
app.use(_express.default.json()); // Routes

app.use('/api/auth', _auth.default);
app.use('/api/users', _user.default);
app.use('/api/customers', _customers.default);
var _default = app;
exports.default = _default;