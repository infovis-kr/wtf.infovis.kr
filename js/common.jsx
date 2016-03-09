import React from 'react';

class Header extends React.Component {
  render() {
    return <div id="header">
      <div className="wrapper">
        <a href="/" className="logo">WTFVIZ.INFOVIS.KR</a>
        <a href="/" className="github">
          <i className="fa fa-github"></i> Github
        </a>
      </div>
    </div>;
  }
}

class Footer extends React.Component {
  render() {
    return <div id="footer">
      <div className="wrapper">
        <p>Design by referencing <a href="https://www.cloudflare.com/" target="_blank">Cloudflare</a>.</p>
        <p>Powerd by <a href="https://github.com/infovis-kr" target="_blank">Infovis-kr</a>.</p>
      </div>
    </div>;
  }
}

export {Header, Footer}
