import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import TagContainer from './containers/TagContainer.js';

function App() {

  const tags = ["Groceries", "Leisure", "Entertainment", "Health & Fitness"];

  return (
    <div className="App">
      <Jumbotron>
        <h1>Spending Tracker</h1>
      </Jumbotron>
      <TagContainer tags={tags} />
    </div>
  );
}

export default App;
