"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class WayTougherSpecification {
  constructor() {
    let {
      strengthDifference,
      courageDifference
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      strengthDifference: 3,
      courageDifference: 4
    };
    this._strengthDifference = strengthDifference;
    this._courageDifference = courageDifference;
  }

  evaluate(transformer, otherTransformer) {
    return transformer.strength >= otherTransformer.strength + this._strengthDifference && transformer.courage >= otherTransformer.courage + this._courageDifference;
  }

  get rationale() {
    return 'waytougher';
  }

  friendlyDescription(transformer, otherTransformer) {
    return "".concat(transformer.name, " was way tougher -  ").concat(otherTransformer.name, " ran away.");
  }

}

var _default = WayTougherSpecification;
exports.default = _default;