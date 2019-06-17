import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/TransformerView.module.css';
import TransformerList from './TransformerList';
import autobotLogo from '../../images/autobotLogo.png';
import decepticonLogo from '../../images/decepticonLogo.png';

const TransformerView = ({ autobots, decepticons }) => (
  <div className={styles.transformer_view_container}>
    <div className={styles.transformer_list_wrapper}>
      <TransformerList allegianceLogoUri={autobotLogo} transformers={autobots} />
    </div>
    <div className={styles.transformer_list_wrapper}>
      <TransformerList allegianceLogoUri={decepticonLogo} transformers={decepticons} />
    </div>
  </div>
);

TransformerView.propTypes = {
  autobots: PropTypes.arrayOf(PropTypes.object).isRequired,
  decepticons: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TransformerView;
