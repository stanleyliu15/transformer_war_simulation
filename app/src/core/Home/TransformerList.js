import React from 'react';
import PropTypes from 'prop-types';

import TransformerListItem from './TransformerListItem';
import computeTransformerRating from '../../util/computeTransformerRating';

const TransformerList = ({ title, transformers }) => (
  <div>
    <h3>{title}</h3>
    <ul>
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
  title: PropTypes.string.isRequired,
  transformers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TransformerList;
