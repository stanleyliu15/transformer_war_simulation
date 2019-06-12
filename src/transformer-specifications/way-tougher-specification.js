class WayTougherSpecification {
  constructor(
    { strengthDifference, courageDifference } = {
      strengthDifference: 3,
      courageDifference: 4
    }
  ) {
    this._strengthDifference = strengthDifference;
    this._courageDifference = courageDifference;
  }

  evaluate(transformer, otherTransformer) {
    return (
      transformer.strength >= otherTransformer.strength + this._strengthDifference &&
      transformer.courage >= otherTransformer.courage + this._courageDifference
    );
  }

  get rationale() {
    return 'waytougher';
  }

  friendlyDescription(transformer, otherTransformer) {
    return `${transformer.name} was way tougher -  ${otherTransformer.name} ran away.`;
  }
}

export default WayTougherSpecification;
