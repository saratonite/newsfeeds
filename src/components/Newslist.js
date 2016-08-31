import React,{Component} from"react";
import axios from 'axios';

import NewsListItem from './NewsListItem.js';


export default class Newslist extends Component {
  constructor(){
    super();
    this.state = {news:[]};
  }

componentDidMount(){

let self = this;

axios.get('https://api.recsys.opera.com/api/1.0/suggestions/sources?ids=5544%2C5182%2C14181%2C2113%2C13504%2C13473%2C13463%2C14600%2C7136%2C2102&count=3')
      .then(function(response){

        console.info(response);
        self.setState({news:response.data.articles})

      })

}

  feeds(){

    return this.state.news.map(function(feed,k){
      return <NewsListItem key={k} data={feed}/>
    });

  }

  render(){
    return(

      <div className="news-list">
        <h2>News List</h2>
        {this.feeds()}
      </div>

    )
  }
}
