import React from 'react';
import PropTypes from 'prop-types';

const Battler = ({ transformer, isVictor }) => {
  if (transformer === 'none') {
    return <div>N/A</div>;
  }

  return <div>{transformer.name}</div>;
};
Battler.propTypes = {
  transformer: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf(['none'])]).isRequired,
  isVictor: PropTypes.bool.isRequired
};

export default Battler;
