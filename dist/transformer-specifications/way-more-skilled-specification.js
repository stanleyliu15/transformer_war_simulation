"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class WayMoreSkilledSpecification {
  constructor(skillDifference) {
    this._skillDifference = skillDifference;
  }

  evaluate(transformer, otherTransformer) {
    return transformer.skill >= otherTransformer.skill + this._skillDifference;
  }

  get rationale() {
    return 'skill';
  }

  friendlyDescription(transformer, otherTransformer) {
    return "".concat(transformer.name, "'s skill was higher than ").concat(otherTransformer.name);
  }

}

var _default = WayMoreSkilledSpecification;
exports.default = _default;