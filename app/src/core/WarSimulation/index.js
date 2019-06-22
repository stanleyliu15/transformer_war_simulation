import React, { Component } from 'react';

import WarAPI from '../../api/WarAPI';
import WarResults from './WarResults';
import { ErrorMessage, LoadingSpinner } from '../../components';

class WarSimulation extends Component {
  state = {
    warData: {},
    isLoading: true,
    error: null
  };

  componentDidMount() {
    WarAPI.getWar()
      .then(warData => {
        this.setState({
          warData,
          isLoading: false
        });
      })
      .catch(error => this.setState({ isLoading: false, error }));
  }

  render() {
    const { warData, isLoading, error } = this.state;

    if (error) {
      return <ErrorMessage message={error.message} />;
    }

    if (isLoading) {
      return <LoadingSpinner />;
    } else {
      return <WarResults warData={warData} />;
    }
  }
}

export default WarSimulation;
