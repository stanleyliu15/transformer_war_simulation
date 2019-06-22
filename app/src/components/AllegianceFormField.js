import React from 'react';
import PropTypes from 'prop-types';

import { allegiances } from '../constants';
import AllegianceLogos from '../constants/allegianceLogos';

import styles from './AllegianceFormField.module.css';
import common_styles from '../CommonStyles.module.css';

const AllegianceFormField = ({ value, onInputChange }) => {
  return (
    <div className={common_styles.form_field_container}>
      <label className={common_styles.form_field_label} htmlFor="allegiance">
        Allegiance
      </label>
      <div className={styles.allegiance_field_input_container}>
        {allegiances.map(allegiance => (
          <div
            className={`${styles.allegiance_input_wrapper} ${
              value === allegiance ? styles.allegiance_input_active : ''
            }`}
            key={allegiance}
          >
            <input
              className={styles.allegiance_input}
              key={allegiance}
              name="allegiance"
              type="image"
              src={AllegianceLogos[allegiance]}
              alt="allegiance logo"
              value={allegiance}
              onClick={onInputChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

AllegianceFormField.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default AllegianceFormField;
