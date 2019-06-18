import React from 'react';
import PropTypes from 'prop-types';

import autobotLogo from '../../images/autobotLogo.png';
import decepticonLogo from '../../images/decepticonLogo.png';
import BattleResult from './BattleResult';
import styles from './styles/BattleResults.module.css';

const BattleResults = ({ results, score }) => {
  return (
    <div className={styles.battle_results_container}>
      <h3 className={styles.battle_results_score}>{`${score.autobot} - ${score.decepticon}`}</h3>
      <div className={styles.battle_allegiances_container}>
        <div className={styles.battle_allegiances_item}>
          <img className={styles.battle_allegiances_image} src={autobotLogo} alt="autobot" />
        </div>
        <div className={styles.battle_allegiances_item}>
          <img className={styles.battle_allegiances_image} src={decepticonLogo} alt="decepticon" />
        </div>
      </div>
      {results.map((result, index) => {
        return <BattleResult key={index} result={result} />;
      })}
    </div>
  );
};

BattleResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  score: PropTypes.shape({
    autobot: PropTypes.number.isRequired,
    decepticon: PropTypes.number.isRequired
  }).isRequired
};

export default BattleResults;
