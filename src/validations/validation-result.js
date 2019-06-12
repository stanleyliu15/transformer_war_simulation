export default class ValidationResult {
  constructor(failedValidationRules, context) {
    this.failedValidationRules = failedValidationRules;
    this._messages = this.failedValidationRules.map(rule => rule.message(context));
  }

  get isValid() {
    return this.failedValidationRules.length === 0;
  }

  get messages() {
    return this._messages;
  }
}
