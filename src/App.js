import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './components/about-me/about-me';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <h1>Joey Saha</h1>
          </header>
          <main>
            <AboutMe className="about-me-body"/>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
