import ValidationResult from './validation-result';

export default function Validator(validationRules) {
  return {
    validate: function(objToValidate) {
      const failedValidationRules = validationRules.filter(rule => {
        return rule.isValid(objToValidate) === false;
      });
      return new ValidationResult(failedValidationRules, objToValidate);
    }
  };
}
