import React from 'react';
import PropTypes from 'prop-types';

const TransformerListItem = ({ id, name, rating }) => (
  <li>
    <a href={`transformers/profile/${id}`}>
      <div>
        <h4>{name}</h4>
        <h6>{`Rating: ${rating}`}</h6>
      </div>
    </a>
  </li>
);

TransformerListItem.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default TransformerListItem;
