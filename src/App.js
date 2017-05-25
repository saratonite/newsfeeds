import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Image } from 'semantic-ui-react'
import { Container, Header } from 'semantic-ui-react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'

import './App.css';
import './components/NewsList.css';

// import Components

import NewsList from './components/Newslist';

export default class App extends Component {
  render() {
    return (
        <Container fluid>
          <Menu attached='top'>

        <Menu.Menu position='right'>
            <div className='ui right aligned category search item'>
              <div className='ui transparent icon input'>
                <input className='prompt' type='text' placeholder='Search animals...' />
                <i className='search link icon' />
              </div>
              <div className='results'></div>
            </div>
          </Menu.Menu>
        </Menu>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <h1>News Feeds</h1>
            </Grid.Column>
            <Grid.Column width={12}>
              <NewsList/>
            </Grid.Column>
          </Grid.Row>

        </Grid>

         </Container>
        

    );
  }
}
