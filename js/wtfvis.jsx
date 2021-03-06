import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {Header, Footer} from './common.jsx';
import Item from './item.jsx';
import PhotoswipeDom from './photoswipe.jsx';

import 'normalize.css';
import '../style/wtfviz.sass';


class WTFVIZ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {embargo: 0, step: 10, feed: [], moreExists: true};
    this.initialLoad();
  }
  initialLoad() {
    $.ajax({
      url: './articles/feed.json',
      success: (data) => {
        this.setState({feed: data.itemList});
        this.loadMore();
      }
    })
  }
  loadMore() {
    if (this.state.embargo + this.state.step >= this.state.feed.length) { 
      this.setState({
        moreExists: false,
        embargo: this.state.feed.length
      }) 
    } else {
      this.setState({embargo: this.state.embargo + this.state.step});
    }
  }
  render() {
    return <div className="app-wrapper">
             <Header/>
            
             <div id="body">
               <div className="wrapper item-list">
                 {this.state.feed.slice(0, this.state.embargo).map((q, i) => {return <Item {...q} index={i} key={i}/>;})}
               </div>
             </div>
            
             {(() => {
               switch (this.state.moreExists) {
                 case true:
                   return <div className="wrapper more">
                     <button onClick={this.loadMore.bind(this)}>more</button>
                   </div>
               }
             })()}
             <PhotoswipeDom/>
             <Footer/>

           </div>
  }
}

ReactDOM.render(<WTFVIZ/>, document.getElementById('react'));
