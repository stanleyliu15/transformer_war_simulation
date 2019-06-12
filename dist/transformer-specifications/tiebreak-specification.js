"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _allegiances = require("../constants/allegiances");

class TieBreakSpecification {
  constructor() {}

  evaluate(transformer, otherTransformer) {
    // Good guys win in the event of a tie.
    return transformer.allegiance === _allegiances.Allegiances.Autobot;
  }

  get rationale() {
    return 'goodguy';
  }

  friendlyDescription(transformer, otherTransformer) {
    return "".concat(transformer.name, " and ").concat(otherTransformer.name, " were tied, but ").concat(transformer.name, " won because the good guys always win.");
  }

}

exports.default = TieBreakSpecification;