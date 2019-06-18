import React from 'react';
import PropTypes from 'prop-types';

import BattleResults from './BattleResults';
import styles from './styles/WarResults.module.css';
import computeBattleResultsScore from '../../util/computeBattleResultsScore';

const WarResults = ({ war }) => {
  const battleResultsScore = computeBattleResultsScore(war.battleResults);
  return (
    <div className={styles.war_result_container}>
      <header className={styles.war_result_header}>
        <a className={styles.war_result_header_title} href="/">
          Battle Results
        </a>
        <h4 className={styles.war_result_header_subtitle}>{war.friendlyDescription}</h4>
      </header>
      {war.battleResults.length && (
        <BattleResults results={war.battleResults} score={battleResultsScore} />
      )}
    </div>
  );
};

WarResults.propTypes = {
  war: PropTypes.object.isRequired
};

export default WarResults;
