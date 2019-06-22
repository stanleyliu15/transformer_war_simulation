import React from 'react';
import PropTypes from 'prop-types';

import AllegianceLogos from '../../constants/allegianceLogos';
import styles from './TransformerAllegiance.module.css';

const TransformerAllegiance = ({ allegiance }) => {
  return (
    <div className={styles.allegiance_container}>
      <div className={styles.allegiance_content_container}>
        <h3>Allegiance</h3>
        <div className={styles.allegiance_image_wrapper}>
          <img
            className={styles.allegiance_image}
            src={AllegianceLogos[allegiance]}
            alt="allegiance logo"
          />
        </div>
      </div>
    </div>
  );
};

TransformerAllegiance.propTypes = {
  allegiance: PropTypes.string.isRequired
};

export default TransformerAllegiance;
