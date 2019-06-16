import React from 'react';
import PropTypes from 'prop-types';
import BattleResults from './BattleResults';

const WarResults = ({ war }) => {
  return (
    <div>
      <div>
        <h2>Battle Results</h2>
        <h4>{war.friendlyDescription}</h4>
      </div>
      <div>{war.battleResults.length && <BattleResults results={war.battleResults} />}</div>
    </div>
  );
};

WarResults.propTypes = {
  war: PropTypes.object.isRequired
};

export default WarResults;
