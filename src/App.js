import React, { Component } from 'react';
import './App.css';

// import Components

import NewsList from './components/Newslist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>News Feeds</h2>
        </div>
        <NewsList/>
      </div>
    );
  }
}

export default App;
