import v8n from 'v8n';

export default class NameMustBeValidRule {
  static isValid(transformer) {
    return v8n()
      .string()
      .minLength(3, 50)
      .test(transformer.name);
  }

  static message(transformer) {
    return `Transformers must have a name between 3 and 50 characters.`;
  }
}
