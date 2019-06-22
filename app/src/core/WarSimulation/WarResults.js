import React from 'react';
import PropTypes from 'prop-types';

import BattleResults from './BattleResults';
import styles from './WarResults.module.css';
import computeBattleResultsScore from '../../util/computeBattleResultsScore';

const WarResults = ({ warData }) => {
  const battleResultsScore = computeBattleResultsScore(warData.battleResults);
  return (
    <div className={styles.war_result_container}>
      {warData.battleResults.length && (
        <BattleResults
          results={warData.battleResults}
          score={battleResultsScore}
          friendlyDescription={warData.friendlyDescription}
        />
      )}
    </div>
  );
};

WarResults.propTypes = {
  warData: PropTypes.object.isRequired
};

export default WarResults;
