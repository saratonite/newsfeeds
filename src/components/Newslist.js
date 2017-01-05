import React,{Component} from"react";
import axios from 'axios';
import { connect } from 'react-redux';

import {sayHello,fetchNews} from '../actions';

import NewsListItem from './NewsListItem.js';


class Newslist extends Component {
  constructor(){
    super();
    this.state = {news:[],page:0};
  }

componentDidMount(){
  //window.addEventListener('scroll', this.handleScroll);
  this.fetchNewsFeed();

  console.info('Props of newslist', this.props);

}

fetchNewsFeed(){
  let self = this;

  this.props.loadNews();
}

handleScroll(e) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        alert('Yep');
    }
}

  feeds(){

    return this.props.news.map(function(feed,k){
      return <NewsListItem key={k} data={feed}/>
    });

  }

  loadMore(){
  }

  render(){
    return(

      <div className="news-list" >
        <h2>News List</h2>
        {this.feeds()}

        <a href="#">More...</a>
      </div>

    )
  }
}

function mapStateToProps(state){

    return {
      news:state.news_threads
    }
}

function mapDispatchToProps(dispatch){
  return {sayHola:function(){
          sayHello(dispatch);
        },
        loadNews: function(){

          fetchNews(dispatch);
        }

  };
}

const newslistContainer = connect(mapStateToProps,mapDispatchToProps)(Newslist);

export default newslistContainer;
