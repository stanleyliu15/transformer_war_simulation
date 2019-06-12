import { Allegiances } from '../constants/allegiances';

class NoAutobotsSpecification {
  static evaluate(autobots, decepticons) {
    return autobots.length === 0 && decepticons.length > 0;
  }

  static getOutcome(autobots, decepticons) {
    return {
      victors: decepticons,
      winningAllegiance: Allegiances.Decepticon,
      survivors: [],
      battleResults: [],
      code: 'no-autobots',
      friendlyDescription: `Wasn't even a fight!  No Autobots were present.`
    };
  }
}

export default NoAutobotsSpecification;
