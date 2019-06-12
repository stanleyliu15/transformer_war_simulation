"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v8n = _interopRequireDefault(require("v8n"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class NameMustBeValidRule {
  static isValid(transformer) {
    return (0, _v8n.default)().string().minLength(3, 50).test(transformer.name);
  }

  static message(transformer) {
    return "Transformers must have a name between 3 and 50 characters.";
  }

}

exports.default = NameMustBeValidRule;