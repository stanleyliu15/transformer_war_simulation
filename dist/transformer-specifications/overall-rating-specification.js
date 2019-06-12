"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class OverallRatingSpecification {
  constructor() {}

  evaluate(transformer, otherTransformer) {
    return transformer.overallRating() > otherTransformer.overallRating();
  }

  get rationale() {
    return 'overallrating';
  }

  friendlyDescription(transformer, otherTransformer) {
    return "".concat(transformer.name, "'s overall rating was higher than ").concat(otherTransformer.name);
  }

}

var _default = OverallRatingSpecification;
exports.default = _default;