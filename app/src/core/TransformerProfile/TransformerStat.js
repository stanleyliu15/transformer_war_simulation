import React from 'react';
import PropTypes from 'prop-types';

import { StatIcons, StatColors, MAX_STAT_VALUE } from '../../constants';
import styles from './TransformerStat.module.css';
import { ProgressLine } from '../../components';
import { styleOptions, animationOptions } from './progressBarStatOptions';

const TransformerStat = ({ stat, statValue }) => (
  <div>
    <div className={styles.stat_label_container}>
      <i className={StatIcons[stat]} style={{ color: StatColors[stat] }} />
      <span className={styles.stat_name}>{stat}</span>
    </div>
    <ProgressLine
      delay={300}
      value={statValue}
      maxValue={MAX_STAT_VALUE}
      styleOptions={styleOptions}
      animationOptions={animationOptions}
    />
  </div>
);

TransformerStat.propTypes = {
  stat: PropTypes.string.isRequired,
  statValue: PropTypes.number.isRequired
};

export default TransformerStat;
