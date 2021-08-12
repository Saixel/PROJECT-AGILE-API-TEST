"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _mongoosePaginate = _interopRequireDefault(require("mongoose-paginate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customerSchema = new _mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 20,
    required: [true, 'Name is required']
  },
  surname: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: [true, 'Surname is required']
  },
  photoUrl: {
    type: String,
    default: 'https://i.ibb.co/86wZYF1/avatardefault-92824.png',
    required: [true, 'Photo url is required']
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  versionKey: false
});
customerSchema.plugin(_mongoosePaginate.default);

var _default = (0, _mongoose.model)('Customer', customerSchema);

exports.default = _default;