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
      <div>
        <pre><strong>{feedData.title}</strong></pre>
      </div>
    )
  }
}
