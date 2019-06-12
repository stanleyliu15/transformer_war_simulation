class OverallRatingSpecification {
  constructor() {}

  evaluate(transformer, otherTransformer) {
    return transformer.overallRating() > otherTransformer.overallRating();
  }

  get rationale() {
    return 'overallrating';
  }

  friendlyDescription(transformer, otherTransformer) {
    return `${transformer.name}'s overall rating was higher than ${otherTransformer.name}`;
  }
}

export default OverallRatingSpecification;
