import React from 'react';
import PropTypes from 'prop-types';

import TransformerListItem from './TransformerListItem';
import computeTransformerRating from '../../util/computeTransformerRating';

const TransformerList = ({ transformers }) => (
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
);

TransformerList.propTypes = {
  transformers: PropTypes.arrayOf(PropTypes.object)
};

export default TransformerList;
