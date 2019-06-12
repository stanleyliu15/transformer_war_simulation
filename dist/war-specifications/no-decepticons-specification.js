"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _allegiances = require("../constants/allegiances");

class NoDecepticonsSpecification {
  static evaluate(autobots, decepticons) {
    return decepticons.length === 0 && autobots.length > 0;
  }

  static getOutcome(autobots, decepticons) {
    return {
      victors: autobots,
      winningAllegiance: _allegiances.Allegiances.Autobot,
      survivors: [],
      battleResults: [],
      code: 'no-decepticons',
      friendlyDescription: "Wasn't even a fight!  No Decepticons were present."
    };
  }

}

var _default = NoDecepticonsSpecification;
exports.default = _default;