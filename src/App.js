import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import uuid from 'uuid';
class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
               <p>Hello World</p>
          </div>
        </div>

      </Router>

    );
  }

}

export default App;
