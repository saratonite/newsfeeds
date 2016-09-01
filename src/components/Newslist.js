import React,{Component} from"react";
import axios from 'axios';

import NewsListItem from './NewsListItem.js';


export default class Newslist extends Component {
  constructor(){
    super();
    this.state = {news:[],page:0};
  }

componentDidMount(){
  //window.addEventListener('scroll', this.handleScroll);
  this.fetchNewsFeed();

}

fetchNewsFeed(){
  let self = this;
  axios.get('https://api.recsys.opera.com/api/1.0/suggestions/sources',{
          params:{
            ids:"5545,4376,5183,4381,13072,4384,5187,13472,13503,13493",
            timeline:true,
            count:20,
            page:self.state.page
          }
        })
        .then(function(response){
          self.setState({news:response.data.articles,page:0});

        });
}

handleScroll(e) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        alert('Yep');
    }
}

  feeds(){

    return this.state.news.map(function(feed,k){
      return <NewsListItem key={k} data={feed}/>
    });

  }

  loadMore(){
    alert('dd');
  }

  render(){
    return(

      <div className="news-list" onScroll={this.loadMore.bind(this)}>
        <h2>News List</h2>
        {this.feeds()}

        <a href="#">More...</a>
      </div>

    )
  }
}
