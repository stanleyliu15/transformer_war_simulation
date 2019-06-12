"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TransformerValidator;

var _validator = _interopRequireDefault(require("./validator"));

var _allegianceMustBeAutobotOrDecepticonRule = _interopRequireDefault(require("./allegiance-must-be-autobot-or-decepticon-rule"));

var _nameMustBeValidRule = _interopRequireDefault(require("./name-must-be-valid-rule"));

var _techspecValueMustBeValidRule = _interopRequireDefault(require("./techspec-value-must-be-valid-rule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TransformerValidator() {
  return (0, _validator.default)([_allegianceMustBeAutobotOrDecepticonRule.default, _nameMustBeValidRule.default, (0, _techspecValueMustBeValidRule.default)('intelligence'), (0, _techspecValueMustBeValidRule.default)('speed'), (0, _techspecValueMustBeValidRule.default)('endurance'), (0, _techspecValueMustBeValidRule.default)('rank'), (0, _techspecValueMustBeValidRule.default)('courage'), (0, _techspecValueMustBeValidRule.default)('firepower'), (0, _techspecValueMustBeValidRule.default)('skill')]);
}