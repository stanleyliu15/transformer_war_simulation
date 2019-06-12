"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addAllegianceRule;

var _v8n = _interopRequireDefault(require("v8n"));

var _allegiances = require("../constants/allegiances");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addAllegianceRule() {
  _v8n.default.extend({
    allegiance: expected => {
      return value => {
        return value === _allegiances.Allegiances.Autobot || value === _allegiances.Allegiances.Decepticon;
      };
    }
  });
}