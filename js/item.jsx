import React from 'react';
import $ from 'jquery';

class Item extends React.Component {
  render() {
    return <ImageItem {...this.props}/>
  }
}

class ImageItem extends React.Component {
  render() {
    return <div className="item">
             <div className="item-header">
               <h3 className="item-title">#{this.props.index}. {this.props.title}</h3>
             </div>
             <div className="item-body">{this.props.description}</div>
           </div>
  }
}

export default Item
