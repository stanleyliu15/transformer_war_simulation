import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Battler.module.css';

const Battler = ({ transformer, isVictor }) => {
  if (transformer === 'none') {
    return <div className={`${styles.battler} ${styles.battler_loser}`} />;
  }

  return (
    <Link
      className={`${styles.battler} ${isVictor ? styles.battler_victor : styles.battler_loser}`}
      to={`/transformers/profile/${transformer.id}`}
    >
      {transformer.name}
    </Link>
  );
};
Battler.propTypes = {
  transformer: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf(['none'])]).isRequired,
  isVictor: PropTypes.bool.isRequired
};

export default Battler;
