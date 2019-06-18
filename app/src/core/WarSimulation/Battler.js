import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Battler.module.css';

const Battler = ({ transformer, isVictor }) => {
  if (transformer === 'none') {
    return <div className={styles.battler}>MIA</div>;
  }

  return (
    <a
      className={`${styles.battler} ${isVictor ? styles.battler_victor : styles.battler_loser}`}
      href={`/transformers/profile/${transformer.id}`}
    >
      {transformer.name}
    </a>
  );
};
Battler.propTypes = {
  transformer: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf(['none'])]).isRequired,
  isVictor: PropTypes.bool.isRequired
};

export default Battler;
