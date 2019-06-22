import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AllegianceLogos from '../../constants/allegianceLogos';
import BattleResult from './BattleResult';
import styles from './BattleResults.module.css';
import { Fade, Slide } from '../../components';

class BattleResults extends Component {
  state = {
    showHeader: false,
    showColumns: false
  };

  componentDidMount() {
    this.showHeaderTimeout = setTimeout(() => {
      this.setState({
        showHeader: true
      });
    }, 300);

    this.showColumnsTimeout = setTimeout(() => {
      this.setState({
        showColumns: true
      });
    }, 1200);
  }

  componentWillUnmount() {
    if (this.showHeaderTimeout) {
      clearInterval(this.showHeaderTimeout);
    }

    if (this.showColumnsTimeout) {
      clearInterval(this.showColumnsTimeout);
    }
  }

  render() {
    const { showHeader, showColumns } = this.state;
    const { results, score, friendlyDescription } = this.props;

    return (
      <div className={styles.battle_results_container}>
        <Slide visible={showHeader} direction="top">
          <header className={styles.battle_results_header}>
            <Link className={styles.battle_results_link_title} to="/">
              War Results
            </Link>
            <h1 className={styles.battle_results_score}>{`${score.autobot} - ${
              score.decepticon
            }`}</h1>
            <h4 className={styles.battle_results_description}>{friendlyDescription}</h4>
          </header>
        </Slide>
        <Fade visible={showColumns}>
          <div className={styles.battle_columns_container}>
            <div className={styles.battle_column_item}>
              <div className={styles.battle_allegiances_image_wrapper}>
                <img
                  className={styles.battle_allegiances_image}
                  src={AllegianceLogos['Autobot']}
                  alt="autobot logo"
                />
              </div>
            </div>
            <div className={styles.battle_column_middle_item}>
              <h3 className={styles.battle_log_title}>Battle Log</h3>
            </div>
            <div className={styles.battle_column_item}>
              <div className={styles.battle_allegiances_image_wrapper}>
                <img
                  className={styles.battle_allegiances_image}
                  src={AllegianceLogos['Decepticon']}
                  alt="decepticon logo"
                />
              </div>
            </div>
          </div>
        </Fade>
        {results.map((result, index) => {
          return <BattleResult key={index} result={result} />;
        })}
      </div>
    );
  }
}

BattleResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  score: PropTypes.shape({
    autobot: PropTypes.number.isRequired,
    decepticon: PropTypes.number.isRequired
  }).isRequired,
  friendlyDescription: PropTypes.string.isRequired
};

export default BattleResults;
