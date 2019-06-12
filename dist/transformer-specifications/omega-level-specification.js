"use strict";

require("core-js/modules/es.string.includes");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _omegaLevelThreats = require("../constants/omega-level-threats");

class OmegaLevelSpecification {
  constructor() {}

  evaluate(transformer, otherTransformer) {
    return _omegaLevelThreats.OmegaLevelThreats.includes(transformer.name.toLowerCase()) && !_omegaLevelThreats.OmegaLevelThreats.includes(otherTransformer.name.toLowerCase());
  }

  get rationale() {
    return 'omegalevel';
  }

  friendlyDescription(transformer, otherTransformer) {
    return "".concat(transformer.name, " is an omega level threat and completely wiped out ").concat(otherTransformer.name);
  }

}

var _default = OmegaLevelSpecification;
exports.default = _default;