import React from 'react';
import PropTypes from 'prop-types';

const TransformerStat = ({ statName, statValue }) => (
  <div>
    <h2>{statValue}</h2>
    <h6>{statName}</h6>
  </div>
);

TransformerStat.propTypes = {
  statName: PropTypes.string.isRequired,
  statValue: PropTypes.number.isRequired
};

export default TransformerStat;
