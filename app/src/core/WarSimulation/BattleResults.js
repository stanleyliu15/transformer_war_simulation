import React from 'react';
import PropTypes from 'prop-types';

import BattleResult from './BattleResult';

const BattleResults = ({ results }) => {
  return (
    <div>
      {results.map((result, index) => {
        return (
          <div key={index}>
            <BattleResult result={result} />
          </div>
        );
      })}
    </div>
  );
};

BattleResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BattleResults;
