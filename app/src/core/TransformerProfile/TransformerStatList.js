import React from 'react';
import PropTypes from 'prop-types';

import TransformerStat from './TransformerStat';
import { TRANSFORMER_MAX_RATING } from '../../constants';
import { ProgressCircle } from '../../components';
import { styleOptions, animationOptions } from './progressBarRatingOptions';
import styles from './TransformerStatList.module.css';

const TransformerStatList = ({ transformerRating, transformerStats }) => {
  return (
    <div>
      <div className={styles.rating_container}>
        <h4 className={styles.rating_title}>Overall Rating</h4>
        <ProgressCircle
          delay={600}
          value={transformerRating}
          maxValue={TRANSFORMER_MAX_RATING}
          styleOptions={styleOptions}
          animationOptions={animationOptions}
        />
      </div>
      <div className={styles.stat_container}>
        {Object.keys(transformerStats).map(statKey => (
          <div className={styles.stat_wrapper} key={statKey}>
            <TransformerStat key={statKey} stat={statKey} statValue={transformerStats[statKey]} />
          </div>
        ))}
      </div>
    </div>
  );
};

TransformerStatList.propTypes = {
  transformerRating: PropTypes.number.isRequired,
  transformerStats: PropTypes.object.isRequired
};

export default TransformerStatList;
