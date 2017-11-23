import React, { Component } from 'react';

import { Row } from './uxComponent/UxBox';
import Main from './main';
import HeaderMenu from './headerMenu';

import './index.css';

//routing here
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 0,
        };

        this.onSelectItem = item => this.setState({ activePage: item })
    }

    render() {
        return (
            <div className="app" id="app">
                <HeaderMenu onSelectItem={this.onSelectItem} cls="app__header"/>
                <Row cls="app__body">
                    <Main activePage={this.state.activePage} />
                </Row>
                {/*<Row cls="app__footer">*/}
                    {/*footer*/}
                {/*</Row>*/}
            </div>
        );
  }
}

export default App;