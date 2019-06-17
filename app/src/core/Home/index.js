import React, { Component } from 'react';

import styles from './styles/Home.module.css';
import TransformerAPI from '../../api/TransformerAPI';
import { Header, ErrorMessage } from '../../components';
import NavigationBar from './NavigationBar';
import ContentLayout from './ContentLayout';
import TransformerView from './TransformerView';
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
      <div>
        <Header />
        <NavigationBar />
        <main>
          <ContentLayout>
            {error && <ErrorMessage message={error.message} />}
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <TransformerView autobots={autobots} decepticons={decepticons} />
            )}
          </ContentLayout>
        </main>
      </div>
    );
  }
}

export default Home;
