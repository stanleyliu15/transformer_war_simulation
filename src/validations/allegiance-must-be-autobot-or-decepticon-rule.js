export default class AllegianceMustBeAutobotOrDecepticonRule {
  static isValid(transformer) {
    return transformer.allegiance === 'Autobot' || transformer.allegiance === 'Decepticon';
  }

  static message(transformer) {
    return `Transformers must be either an Autobot or Decepticon`;
  }
}
