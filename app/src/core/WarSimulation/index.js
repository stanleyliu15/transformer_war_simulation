import React, { Component } from 'react';

import WarResults from './WarResults';
import WarAPI from '../../api/WarAPI';
import { ErrorMessage } from '../../components';

class WarSimulation extends Component {
  state = {
    war: {},
    isLoading: true,
    error: null
  };

  componentDidMount() {
    WarAPI.getWar()
      .then(war => {
        this.setState({
          isLoading: false,
          war
        });
      })
      .catch(error => this.setState({ isLoading: false, error }));
  }

  render() {
    const { war, isLoading, error } = this.state;

    if (error) {
      return <ErrorMessage message={error.message} />;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <WarResults war={war} />
      </div>
    );
  }
}

export default WarSimulation;
