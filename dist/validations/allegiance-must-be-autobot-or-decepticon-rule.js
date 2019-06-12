"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class AllegianceMustBeAutobotOrDecepticonRule {
  static isValid(transformer) {
    return transformer.allegiance === 'Autobot' || transformer.allegiance === 'Decepticon';
  }

  static message(transformer) {
    return "Transformers must be either an Autobot or Decepticon";
  }

}

exports.default = AllegianceMustBeAutobotOrDecepticonRule;