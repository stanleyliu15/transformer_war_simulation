import React from 'react';
import PropTypes from 'prop-types';

import Battler from './Battler';
import styles from './styles/BattleResult.module.css';

const BattleResult = ({ result }) => {
  return (
    <div
      className={`${styles.battle_result_container} ${result.victor.allegiance === 'Decepticon' &&
        styles.battler_display_reverse}`}
    >
      <div className={styles.battle_result_item_wrapper}>
        <Battler transformer={result.victor} isVictor={true} />
      </div>
      <div className={styles.battle_result_item_wrapper}>
        <Battler transformer={result.loser} isVictor={false} />
      </div>
    </div>
  );
};

BattleResult.propTypes = {
  result: PropTypes.object.isRequired
};

export default BattleResult;
