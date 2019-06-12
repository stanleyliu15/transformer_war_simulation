"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _allegiances = require("../constants/allegiances");

class NoAutobotsSpecification {
  static evaluate(autobots, decepticons) {
    return autobots.length === 0 && decepticons.length > 0;
  }

  static getOutcome(autobots, decepticons) {
    return {
      victors: decepticons,
      winningAllegiance: _allegiances.Allegiances.Decepticon,
      survivors: [],
      battleResults: [],
      code: 'no-autobots',
      friendlyDescription: "Wasn't even a fight!  No Autobots were present."
    };
  }

}

var _default = NoAutobotsSpecification;
exports.default = _default;