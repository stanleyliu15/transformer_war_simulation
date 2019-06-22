import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextFormField.module.css';
import common_styles from '../CommonStyles.module.css';

const TextFormField = ({ name, value, onInputChange }) => {
  return (
    <div className={common_styles.form_field_container}>
      <label className={common_styles.form_field_label} htmlFor={name}>
        {name}
      </label>
      <input
        className={styles.form_field_text_input}
        name={name}
        type="text"
        placeholder={`Enter a ${name}`}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

TextFormField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default TextFormField;
