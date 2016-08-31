import React, { Component } from 'react';
import './App.css';
import './NewsList.css';

// import Components

import NewsList from './components/Newslist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>News Feeds</h2>
        </div>
        <div>
        <NewsList/>
        </div>
      </div>
    );
  }
}

export default App;
