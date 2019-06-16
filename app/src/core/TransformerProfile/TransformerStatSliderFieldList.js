import React from 'react';
import PropTypes from 'prop-types';

import TransformerStatSliderField from '../../components/TransformerStatSliderField';

const TransformerStatSliderFieldList = ({ transformerStats, inputs, onInputChange }) =>
  Object.keys(transformerStats).map(statKey => (
    <TransformerStatSliderField
      key={statKey}
      name={statKey}
      value={inputs[statKey] || transformerStats[statKey]}
      onChange={onInputChange}
    />
  ));

TransformerStatSliderFieldList.propTypes = {
  transformerStats: PropTypes.object.isRequired,
  inputs: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default TransformerStatSliderFieldList;
