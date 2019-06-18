/**
 * Computes the number of wins of each allegiance where allegiance is either 'Autobot' or 'Decepticon'
 * @param {Object} results - the battle results
 * @returns {Object} score - the number of wins on each allegiance
 */
const computeBattleResultsScore = results => {
  const score = {
    autobot: 0,
    decepticon: 0
  };

  results.forEach(result => {
    score[result.victor.allegiance.toLowerCase()]++;
  });

  return score;
};

export default computeBattleResultsScore;
