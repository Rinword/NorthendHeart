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
            activePage: '',
        };

        this.oneMenuSelect = item => {
            // console.log('menu', item);
            this.setState({ activePage: item })
        };
        this.onMouseSelect = item => {
            // console.log('scroll', item);
            this.setState({ activePage: item });
        }
    }

    componentDidMount() {
        this.setState({activePage: 'slide0'});
    }

    render() {
        console.log('--render', this.state.activePage);
        return (
            <div className="app" id="app">
                <HeaderMenu activePage={this.state.activePage} onSelectItem={this.oneMenuSelect} cls="app__header"/>
                <Row cls="app__body">
                    <Main activePage={this.state.activePage} onSelectPage={this.onMouseSelect} />
                </Row>
                {/*<Row cls="app__footer">*/}
                    {/*footer*/}
                {/*</Row>*/}
            </div>
        );
  }
}

export default App;