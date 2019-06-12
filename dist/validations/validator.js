"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Validator;

var _validationResult = _interopRequireDefault(require("./validation-result"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Validator(validationRules) {
  return {
    validate: function validate(objToValidate) {
      const failedValidationRules = validationRules.filter(rule => {
        return rule.isValid(objToValidate) === false;
      });
      return new _validationResult.default(failedValidationRules, objToValidate);
    }
  };
}