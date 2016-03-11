import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
require('imports!./freewall.js');


class ImageMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.source.map((e, i) => { return {src: e.src, w: e.width, h: e.height} })
    }
  }
  initGallery(order) {
    var options = {index: order || 0};
    var gallery = new PhotoSwipe(document.querySelectorAll('.pswp')[0], 
                                 PhotoSwipeUI_Default, 
                                 this.state.items, 
                                 options);
    gallery.init();
  }
  componentDidMount() {
    var mediaContainer = this.refs.mediaContainer;
    var wall = new Freewall(mediaContainer);
    wall.reset({
      selector: 'img',
      animate: true,
      cellW: 15.5, cellH: 15,
      gutterX: 5, gutterY: 5
    });
    $(mediaContainer).find('img').load(function() {wall.fitWidth()});
  }
  render() {
    return <div className="item-media image">
      <div ref="mediaContainer">
        {this.props.source.map((q, i) => { return <img key={i} src={q.src} onClick={this.initGallery.bind(this, i)}/>; })}
      </div>
    </div>;
  }
}

class TwitterMedia extends React.Component {
  componentDidMount() {
    twttr.widgets.load(this.refs.mediaContainer);
  }
  render() {
    var convertTweetType = (t) => {
      switch (t) {
        case "video":
          return "twitter-video";
        default:
          return "twitter-tweet";
      } 
    }
    return <div className="item-media twitter">
      <div ref="mediaContainer">
        {this.props.source.map((q, i) => {
          return <blockquote key={i}
                  className={convertTweetType(q.type)}
                  lang="ko" data-lang="ko"
                  data-conversation="none"><a href={q.src}/></blockquote>;
        })}
      </div>
    </div>;
  }
}

class YoutubeMedia extends React.Component {
  render() {
    return <div className="item-media youtube">
      <div ref="mediaContainer">
        {this.props.source.map((q, i) => {
          return <iframe width="640" height="360" 
                  src={q.src}
                  frameBorder="0" allowFullScreen />
        })}
      </div>
    </div>;
  }
}

export default class Item extends React.Component {
  render() {
    return <div className="item">
             <div className="item-header">
               <h3 className="item-title">{this.props.title}</h3>
             </div>
             <div className="item-body">{this.props.description}</div>
             <div className="item-media-box">
             {(() => {
               switch (this.props.type) {
                 case "image":
                   return <ImageMedia {...this.props}/>;
                 case "twitter":
                   return <TwitterMedia {...this.props}/>;
                 case "youtube":
                   return <YoutubeMedia {...this.props}/>;
               }
             })()}
             </div>
           </div>;
  }
}
