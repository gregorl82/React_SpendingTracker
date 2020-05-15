import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CategoryContainer from './containers/CategoryContainer';
import NavigationBar from './components/NavigationBar';

function App() {

  return (
    <div className="App">
      <Jumbotron>
        <h1>Spending Tracker</h1>
      </Jumbotron>
      <NavigationBar />
      <CategoryContainer />
    </div>
  );
}

export default App;
