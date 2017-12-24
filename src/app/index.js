import React, { Component } from 'react';
import Modal from 'react-modal';

import { Row } from './uxComponent/UxBox';
import Main from './main';
import HeaderMenu from './headerMenu';

import './index.css';

//routing here
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 'slide2',
        };

        this.onMenuSelect = item => {
            this.setState({ activePage: item });
        };
        this.onMouseSelect = item => {
            this.setState({ activePage: item });
        };
    }

    componentDidMount() {
        this.setState({ activePage: 'slide2' });
        Modal.setAppElement('#app');
    }

    render() {
        return (
            <div className="app" id="app">
                <HeaderMenu activePage={this.state.activePage} onSelectItem={this.onMenuSelect} cls="app__header" />
                <Row cls="app__body">
                    <Main activePage={this.state.activePage} onSelectPage={this.onMouseSelect} />
                </Row>
                <Row cls="app__footer">
                    <div>
                        Icons made by
                        <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
                            Smashicons
                        </a>
                        <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
                            Pixel perfect
                        </a>
                        from{' '}
                        <a href="https://www.flaticon.com/" title="Flaticon">
                            www.flaticon.com
                        </a>{' '}
                        is licensed by
                        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">
                            CC 3.0 BY
                        </a>
                        <a href="http://www.freepik.com" title="Freepik">
                            Freepik
                        </a>{' '}
                    </div>
                </Row>
            </div>
        );
    }
}

export default App;
