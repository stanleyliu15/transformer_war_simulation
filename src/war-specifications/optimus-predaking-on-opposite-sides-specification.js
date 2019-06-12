import { OmegaLevelThreatNames } from '../constants/omega-level-threats';

class UltimateDestructionSpecification {
  static evaluate(autobots, decepticons) {
    // One of two conditions can exist:
    // Optimus is on the Autobot side and Predaking is on the Decepticon side
    // Predaking is on the Autobot side (!!!!)
    // and Optimus is on the Decepticon side (what?!?)
    if (
      UltimateDestructionSpecification.omegaLevelIsOnSide(
        OmegaLevelThreatNames.OptimusPrime,
        autobots
      ) &&
      UltimateDestructionSpecification.omegaLevelIsOnSide(
        OmegaLevelThreatNames.Predaking,
        decepticons
      )
    ) {
      return true;
    } else if (
      UltimateDestructionSpecification.omegaLevelIsOnSide(
        OmegaLevelThreatNames.Predaking,
        autobots
      ) &&
      UltimateDestructionSpecification.omegaLevelIsOnSide(
        OmegaLevelThreatNames.OptimusPrime,
        decepticons
      )
    ) {
      return true;
    }
    return false;
  }

  static omegaLevelIsOnSide(omegaLevelTransformerName, army) {
    return (
      army.filter(bot => bot.name.toLowerCase() === omegaLevelTransformerName.toLowerCase())
        .length > 0
    );
  }

  static getOutcome(autobots, decepticons) {
    return {
      victors: [],
      winningAllegiance: 'none',
      survivors: [],
      battleResults: [],
      code: 'ultimate-destruction',
      friendlyDescription:
        'The presence of Optimus and Predaking on opposing sides has led to the destruction of all that is.'
    };
  }
}

export default UltimateDestructionSpecification;
