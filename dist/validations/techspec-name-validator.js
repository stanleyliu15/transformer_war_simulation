"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v8n = _interopRequireDefault(require("v8n"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _v8n.default)().string().minLength(3, 50);

exports.default = _default;