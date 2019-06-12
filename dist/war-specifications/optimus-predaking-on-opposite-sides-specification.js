"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _omegaLevelThreats = require("../constants/omega-level-threats");

class UltimateDestructionSpecification {
  static evaluate(autobots, decepticons) {
    // One of two conditions can exist:
    // Optimus is on the Autobot side and Predaking is on the Decepticon side
    // Predaking is on the Autobot side (!!!!)
    // and Optimus is on the Decepticon side (what?!?)
    if (UltimateDestructionSpecification.omegaLevelIsOnSide(_omegaLevelThreats.OmegaLevelThreatNames.OptimusPrime, autobots) && UltimateDestructionSpecification.omegaLevelIsOnSide(_omegaLevelThreats.OmegaLevelThreatNames.Predaking, decepticons)) {
      return true;
    } else if (UltimateDestructionSpecification.omegaLevelIsOnSide(_omegaLevelThreats.OmegaLevelThreatNames.Predaking, autobots) && UltimateDestructionSpecification.omegaLevelIsOnSide(_omegaLevelThreats.OmegaLevelThreatNames.OptimusPrime, decepticons)) {
      return true;
    }

    return false;
  }

  static omegaLevelIsOnSide(omegaLevelTransformerName, army) {
    return army.filter(bot => bot.name.toLowerCase() === omegaLevelTransformerName.toLowerCase()).length > 0;
  }

  static getOutcome(autobots, decepticons) {
    return {
      victors: [],
      winningAllegiance: 'none',
      survivors: [],
      battleResults: [],
      code: 'ultimate-destruction',
      friendlyDescription: 'The presence of Optimus and Predaking on opposing sides has led to the destruction of all that is.'
    };
  }

}

var _default = UltimateDestructionSpecification;
exports.default = _default;