import React from 'react';
import PropTypes from 'prop-types';

import TransformerList from './TransformerList';

const TransformerView = ({ autobots, decepticons }) => (
  <div>
    <div>
      <h3>Autobots</h3>
      <TransformerList transformers={autobots} />
    </div>
    <div>
      <h3>Decepticons</h3>
      <TransformerList transformers={decepticons} />
    </div>
  </div>
);

TransformerView.propTypes = {
  autobots: PropTypes.arrayOf(PropTypes.object),
  decepticons: PropTypes.arrayOf(PropTypes.object)
};

export default TransformerView;
