/**
 * Get a transformer's stats
 * @param {Object} transformer
 * @returns {Object} stats - the transformer's stats
 */
const getTransformerStats = transformer => {
  return {
    strength: transformer.strength,
    intelligence: transformer.intelligence,
    speed: transformer.speed,
    endurance: transformer.endurance,
    rank: transformer.rank,
    courage: transformer.courage,
    firepower: transformer.firepower,
    skill: transformer.skill
  };
};

export default getTransformerStats;
