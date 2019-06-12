import { Allegiances } from '../constants/allegiances';

export default class TieBreakSpecification {
  constructor() {}

  evaluate(transformer, otherTransformer) {
    // Good guys win in the event of a tie.
    return transformer.allegiance === Allegiances.Autobot;
  }

  get rationale() {
    return 'goodguy';
  }

  friendlyDescription(transformer, otherTransformer) {
    return `${transformer.name} and ${otherTransformer.name} were tied, but ${
      transformer.name
    } won because the good guys always win.`;
  }
}
