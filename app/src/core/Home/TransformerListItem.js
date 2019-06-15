import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TransformerListItem = ({ id, name, rating }) => (
  <li>
    <Link to={`transformers/profile/${id}`}>
      <div>
        <h4>{name}</h4>
        <h6>{`Rating: ${rating}`}</h6>
      </div>
    </Link>
  </li>
);

TransformerListItem.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default TransformerListItem;
