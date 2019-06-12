import { OmegaLevelThreats } from '../constants/omega-level-threats';

class OmegaLevelSpecification {
  constructor() {}

  evaluate(transformer, otherTransformer) {
    return (
      OmegaLevelThreats.includes(transformer.name.toLowerCase()) &&
      !OmegaLevelThreats.includes(otherTransformer.name.toLowerCase())
    );
  }

  get rationale() {
    return 'omegalevel';
  }

  friendlyDescription(transformer, otherTransformer) {
    return `${transformer.name} is an omega level threat and completely wiped out ${
      otherTransformer.name
    }`;
  }
}

export default OmegaLevelSpecification;
