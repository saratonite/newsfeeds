import React,{Component} from"react";
import { Item } from 'semantic-ui-react'
import PropTypes from 'prop-types';
export default class NewsListItem extends Component {
  constructor(){
    super();
  }

  componentDidMount(){


  }

  render(){
    let feedData = this.props.data;
    return(

        <Item>
      <Item.Image size='small' src={feedData.image.url} />

      <Item.Content>
        <Item.Header as='a'>{feedData.title}</Item.Header>
        <Item.Description>
          <p>
           {feedData.summary}
          </p>
        </Item.Description>
      </Item.Content>
    </Item>
    )
  }
}

NewsListItem.propTypes = {
  data: PropTypes.object.isRequired
}
