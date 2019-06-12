import { Allegiances } from '../constants/allegiances';

class NoDecepticonsSpecification {
  static evaluate(autobots, decepticons) {
    return decepticons.length === 0 && autobots.length > 0;
  }

  static getOutcome(autobots, decepticons) {
    return {
      victors: autobots,
      winningAllegiance: Allegiances.Autobot,
      survivors: [],
      battleResults: [],
      code: 'no-decepticons',
      friendlyDescription: `Wasn't even a fight!  No Decepticons were present.`
    };
  }
}

export default NoDecepticonsSpecification;
