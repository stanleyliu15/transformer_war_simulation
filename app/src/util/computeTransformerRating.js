/**
 * Computes a transformers overall rating
 * @param {Object} transformer
 * @returns {number} rating - the overall rating of a transformer
 */
const computeTransformerRating = transformer =>
  transformer.strength +
  transformer.intelligence +
  transformer.speed +
  transformer.endurance +
  transformer.rank +
  transformer.courage +
  transformer.firepower +
  transformer.skill;

export default computeTransformerRating;
