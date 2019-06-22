import React, { Component } from 'react';

import TransformerAPI from '../../api/TransformerAPI';
import { Header, ErrorMessage, LoadingSpinner } from '../../components';
import UserActionsNavigationBar from './UserActionsNavigationBar';
import HomeView from './HomeView';
import sortObjectArrayAlphabetical from '../../util/sortObjectArrayAlphabetical';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      error: null,
      data: {
        autobots: [],
        decepticons: []
      }
    };
  }

  componentDidMount() {
    Promise.all([TransformerAPI.getAutobots(), TransformerAPI.getDecepticons()])
      .then(results => {
        const [autobots, decepticons] = results;

        this.setState({
          isLoading: false,
          data: {
            autobots: sortObjectArrayAlphabetical(autobots, 'name'),
            decepticons: sortObjectArrayAlphabetical(decepticons, 'name')
          }
        });
      })
      .catch(error => this.setState({ isLoading: false, error }));
  }

  render() {
    const {
      isLoading,
      error,
      data: { autobots, decepticons }
    } = this.state;
    return (
      <>
        <Header />
        <UserActionsNavigationBar />
        <main>
          {error && <ErrorMessage message={error.message} />}
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <HomeView autobots={autobots} decepticons={decepticons} />
          )}
        </main>
      </>
    );
  }
}

export default Home;
