import React from 'react';
import PropTypes from 'prop-types';

import Battler from './Battler';

const BattleResult = ({ result }) => {
  return (
    <div>
      <div>
        <Battler transformer={result.victor} isVictor={true} />
      </div>
      <div>
        <Battler transformer={result.loser} isVictor={false} />
      </div>
    </div>
  );
};

BattleResult.propTypes = {
  result: PropTypes.object.isRequired
};

export default BattleResult;
