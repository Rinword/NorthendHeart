import React, { Component } from 'react';
import Modal from 'react-modal';

import { id } from '../gaTokens';
import ReactGA from 'react-ga';

import { Row } from './uxComponent/UxBox';
import Main from './main';
import HeaderMenu from './headerMenu';
import ShareSocial from './shareSocial';

import validations from './uxComponent/form/validations';

import './index.css';

ReactGA.initialize(id);
ReactGA.pageview(window.location.pathname);

//routing here
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 'slide1',
        };

        this.onMenuSelect = item => {
            this.setState({ activePage: item });
        };
        this.onMouseSelect = item => {
            this.setState({ activePage: item });
        };

        validations();
    }

    componentDidMount() {
        this.setState({ activePage: 'slide0' });
        Modal.setAppElement('#app');
    }

    render() {
        return (
            <div className="app" id="app">
                <HeaderMenu activePage={this.state.activePage} onSelectItem={this.onMenuSelect} cls="app__header" />
                <Row cls="app__body">
                    <Main activePage={this.state.activePage} onSelectPage={this.onMouseSelect} />
                </Row>
                <ShareSocial />
            </div>
        );
    }
}

export default App;
