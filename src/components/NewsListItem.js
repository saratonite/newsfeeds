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
        <div className="feed-image">
          <img src={feedData.image.url} />
        </div>
        <div className="feed-body">
        <strong>{feedData.title}</strong>
        <p>{feedData.summary}</p>
        </div>

      </div>
    )
  }
}
