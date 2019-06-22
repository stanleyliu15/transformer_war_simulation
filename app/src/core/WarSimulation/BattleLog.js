import React from 'react';
import PropTypes from 'prop-types';

import styles from './BattleLog.module.css';

const BattleLog = ({ description }) => {
  return <div className={styles.battle_log_container}>{description}</div>;
};

BattleLog.propTypes = {
  description: PropTypes.string.isRequired
};

export default BattleLog;
