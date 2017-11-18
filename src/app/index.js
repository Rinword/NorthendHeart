import React, { Component } from 'react';

import { Row, Column } from './uxComponent/UxBox';
import Content from './main';
import HeaderMenu from './headerMenu';

import logo from '../static/img/logo.svg'; //TODO set absolute path
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Row cls="app__header" jc="space-between">
          <img src={logo} className="app__logo" alt="logo" />
          <HeaderMenu/>
        </Row>
        <Row cls="app__body">
            <Content/>
        </Row>
        <Row cls="app__footer">
            footer
        </Row>
      </div>
    );
  }
}

export default App;