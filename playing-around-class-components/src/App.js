import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return(
      <div>
        <header className="App-header"> 
          <NavBar />
        </header>
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    return(
      <nav className="Navigaton">
        <ul className="Navigation-list">
          <li className="Navigation-list-item">
            <a className="Navigation-links" href="#">Home</a>
          </li>
          <li className="Navigation-list-item">
            <a className="Navigation-links" href="#">About Me</a>
          </li>
          <li className="Navigation-list-item">
            <a className="Navigation-links" href="#">Projects</a>
          </li>
          <li className="Navigation-list-item">
            <a className="Navigation-links" href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default App;
