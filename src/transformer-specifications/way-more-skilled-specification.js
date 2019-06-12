class WayMoreSkilledSpecification {
  constructor(skillDifference) {
    this._skillDifference = skillDifference;
  }

  evaluate(transformer, otherTransformer) {
    return transformer.skill >= otherTransformer.skill + this._skillDifference;
  }

  get rationale() {
    return 'skill';
  }

  friendlyDescription(transformer, otherTransformer) {
    return `${transformer.name}'s skill was higher than ${otherTransformer.name}`;
  }
}

export default WayMoreSkilledSpecification;
