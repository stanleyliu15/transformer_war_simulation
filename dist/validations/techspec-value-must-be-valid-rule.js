"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TechSpecValueMustBeValidRule;

var _v8n = _interopRequireDefault(require("v8n"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TechSpecValueMustBeValidRule(prop) {
  return {
    isValid: function isValid(transformer) {
      return transformer[prop] >= 1 && transformer[prop] <= 10;
    },
    message: function message(transformer) {
      return "A transformer's ".concat(prop, " must be between 1 and 10.");
    }
  };
}