import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout />
      </Router>
    );
  }
}

export default App;
