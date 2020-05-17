import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CategoryContainer from './containers/CategoryContainer';
import MerchantContainer from './containers/MerchantContainer';
import BudgetContainer from './containers/BudgetContainer';
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
          <Route path="/" exact component={MerchantContainer} />
          <Route path="/categories" exact component={CategoryContainer} />
          <Route path="/budgets" exact component={BudgetContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
