import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './core/Home';
import TransformerCreate from './core/TransformerCreate';
import TransformerProfile from './core/TransformerProfile';
import WarSimulation from './core/WarSimulation';
import PageNotFound from './core/PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/transformers/create/" exact component={TransformerCreate} />
        <Route path="/transformers/profile/:id/" exact component={TransformerProfile} />
        <Route path="/war/:type?" exact component={WarSimulation} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
