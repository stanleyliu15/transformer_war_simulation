import v8n from 'v8n';

export default function TechSpecValueMustBeValidRule(prop) {
  return {
    isValid: function(transformer) {
      return transformer[prop] >= 1 && transformer[prop] <= 10;
    },
    message: function(transformer) {
      return `A transformer's ${prop} must be between 1 and 10.`;
    }
  };
}
