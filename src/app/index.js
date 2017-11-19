import React, { Component } from 'react';

import { Row } from './uxComponent/UxBox';
import Main from './main';
import HeaderMenu from './headerMenu';

import './index.css';

//routing here
class App extends Component {
    render() {
        return (
            <div className="app">
                <HeaderMenu cls="app__header"/>
                <Row cls="app__body">
                    <Main/>
                </Row>
                {/*<Row cls="app__footer">*/}
                    {/*footer*/}
                {/*</Row>*/}
            </div>
        );
  }
}

export default App;