import React from 'react';
import PropTypes from 'prop-types';

import TransformerStat from './TransformerStat';

const TransformerStatList = ({ transformerRating, transformerStats }) => (
  <div>
    <div>
      <h3>Overall Rating</h3>
      <h4>{transformerRating}</h4>
    </div>
    <div>
      {Object.keys(transformerStats).map(statKey => (
        <TransformerStat key={statKey} statName={statKey} statValue={transformerStats[statKey]} />
      ))}
    </div>
  </div>
);

TransformerStatList.propTypes = {
  transformerRating: PropTypes.number.isRequired,
  transformerStats: PropTypes.object.isRequired
};

export default TransformerStatList;
