import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={About} />
        <Route exact path="/" component={Contact} />
        <Route component={NoMatch} />
        </Switch>
      </Router>

    </React.Fragment>
  );
}

export default App;
