import React from 'react';
import PropTypes from 'prop-types';

import { StatIcons, StatColors } from '../constants';
import styles from './TransformerStatsSliderFormFieldList.module.css';

const TransformerStatsSliderFieldList = ({ statInputs, defaultStatInputs, onInputChange }) => {
  const inputs = { ...defaultStatInputs, ...statInputs };

  return (
    <div className={styles.stats_container}>
      <h2 className={styles.stats_title}>Stats</h2>
      <div className={styles.stat_fields_container}>
        {Object.keys(inputs).map(inputKey => (
          <div className={styles.stat_field_container} key={inputKey}>
            <i className={StatIcons[inputKey]} style={{ color: StatColors[inputKey] }} />
            <label className={styles.stat_field_label} htmlFor={inputKey}>
              {`${inputKey}: ${inputs[inputKey]}`}
            </label>
            <div className={styles.stat_field_slider_input_wrapper}>
              <input
                className={styles.stat_field_slider_input}
                name={inputKey}
                type="range"
                min="1"
                max="10"
                value={inputs[inputKey]}
                onChange={onInputChange}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

TransformerStatsSliderFieldList.propTypes = {
  defaultStatInputs: PropTypes.object,
  statInputs: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default TransformerStatsSliderFieldList;
