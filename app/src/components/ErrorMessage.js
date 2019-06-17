import React from 'react';
import PropTypes from 'prop-types';

import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.error_wrapper}>
      <p className={styles.error_text}>{`Error: ${message}`}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;
