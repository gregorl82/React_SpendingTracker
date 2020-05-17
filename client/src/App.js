import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CategoryContainer from './containers/CategoryContainer';
import MerchantContainer from './containers/MerchantContainer';
import NavigationBar from './containers/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Jumbotron>
          <h2>Spending Tracker</h2>
        </Jumbotron>
        <NavigationBar />
        <Switch>
          <Route path="/categories" exact component={CategoryContainer} />
          <Route path="/" component={MerchantContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
