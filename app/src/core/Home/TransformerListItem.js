import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles/TransformerList.module.css';

const TransformerListItem = ({ id, name, rating }) => (
  <li className={styles.transformer_item_wrapper}>
    <Link className={styles.transformer_item} to={`transformers/profile/${id}`}>
      <h4 className={styles.transformer_item_name}>{name}</h4>
      <p>{`Rating: ${rating}`}</p>
    </Link>
  </li>
);

TransformerListItem.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default TransformerListItem;
