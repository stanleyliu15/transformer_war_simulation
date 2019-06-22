import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Battler from './Battler';
import BattleLog from './BattleLog';
import styles from './BattleResult.module.css';
import { Fade, Slide } from '../../components';

class BattleResult extends Component {
  state = {
    showBattlers: false,
    showBattleLog: false
  };

  componentDidMount() {
    this.showBattlersTimeout = setTimeout(() => {
      this.setState({
        showBattlers: true
      });
    }, 600);

    this.showBattleLogTimeout = setTimeout(() => {
      this.setState({
        showBattleLog: true
      });
    }, 1200);
  }

  componentWillUnmount() {
    clearInterval(this.showBattlersTimeout);
    clearInterval(this.showBattleLogTimeout);
  }

  render() {
    const { result } = this.props;
    const { showBattlers, showBattleLog } = this.state;

    const victorIsAutobot = result.victor.allegiance === 'Autobot';

    let container_styles = styles.battle_result_container;
    if (result.victor.allegiance === 'Decepticon') {
      container_styles += ` ${styles.battlers_display_reverse}`;
    }

    return (
      <div className={container_styles}>
        <div className={styles.battle_result_item_wrapper}>
          <Slide visible={showBattlers} direction={victorIsAutobot ? 'left' : 'right'}>
            <Battler transformer={result.victor} isVictor={true} />
          </Slide>
        </div>
        <div className={styles.battle_result_log_wrapper}>
          <Fade visible={showBattleLog} direction="top">
            <BattleLog rationale={result.rationale} description={result.description} />
          </Fade>
        </div>
        <div className={styles.battle_result_item_wrapper}>
          <Slide visible={showBattlers} direction={victorIsAutobot ? 'right' : 'left'}>
            <Battler transformer={result.loser} isVictor={false} />
          </Slide>
        </div>
      </div>
    );
  }
}

BattleResult.propTypes = {
  result: PropTypes.object.isRequired
};

export default BattleResult;
