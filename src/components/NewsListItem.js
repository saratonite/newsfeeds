import React,{Component} from"react";

export default class NewsListItem extends Component {
  constructor(){
    super();
  }

  componentDidMount(){


  }

  render(){
    let feedData = this.props.data;
    return(
      <div className="feed-list-item">
        <strong>{feedData.title}</strong>
        <p>{feedData.summary}</p>
      </div>
    )
  }
}
