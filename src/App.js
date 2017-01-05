import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import './components/NewsList.css';

// import Components

import NewsList from './components/Newslist';

export default class App extends Component {
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
