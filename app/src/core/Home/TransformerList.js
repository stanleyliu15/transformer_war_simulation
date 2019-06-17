import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/TransformerList.module.css';
import TransformerListItem from './TransformerListItem';
import computeTransformerRating from '../../util/computeTransformerRating';

const TransformerList = ({ allegianceLogoUri, transformers }) => (
  <div className={styles.transformer_list_container}>
    <ul>
      <img
        className={styles.transformer_list_allegiance_logo}
        src={allegianceLogoUri}
        alt="allegiance logo"
      />
      {transformers.map(transformer => (
        <TransformerListItem
          key={transformer.id}
          id={transformer.id}
          name={transformer.name}
          rating={computeTransformerRating(transformer)}
        />
      ))}
    </ul>
  </div>
);

TransformerList.propTypes = {
  allegianceLogoUri: PropTypes.string.isRequired,
  transformers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TransformerList;
