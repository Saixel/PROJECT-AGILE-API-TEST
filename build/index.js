"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(_app["default"].get('port')); // console.log('Server listen on port', app.get('port'))


console.info('>'.repeat(40));
console.info('💻  AGILE API TEST ALIVE');
console.info("\uD83D\uDCE1  PORT: ".concat(_app["default"].get('port')));
console.info('>'.repeat(40) + '\n');