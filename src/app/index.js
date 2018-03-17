import React, { Component } from 'react';
import Modal from 'react-modal';
import cx from 'classnames';

import { id } from '../gaTokens';
import ReactGA from 'react-ga';

import {
    FacebookShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    EmailShareButton,
    FacebookIcon,
    WhatsappIcon,
    TelegramIcon,
    EmailIcon,
} from 'react-share';

import { Row } from './uxComponent/UxBox';
import Main from './main';
import HeaderMenu from './headerMenu';

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
            showShare: true,
        };

        this.onMenuSelect = item => {
            this.setState({ activePage: item });
        };
        this.onMouseSelect = item => {
            this.setState({ activePage: item });
        };

        this.toggleShare = () => {
            this.setState({ showShare: !this.state.showShare });
        };

        validations();
    }

    componentDidMount() {
        this.setState({ activePage: 'slide0' });
        Modal.setAppElement('#app');
    }

    render() {
        const shareUrl = 'https://plusmodul.com';
        const quote = 'PLUSMODUL';
        return (
            <div className="app" id="app">
                <HeaderMenu activePage={this.state.activePage} onSelectItem={this.onMenuSelect} cls="app__header" />
                <Row cls="app__body">
                    <Main activePage={this.state.activePage} onSelectPage={this.onMouseSelect} />
                </Row>
                <div className="app__share-area">
                    <Row
                        cls={cx('app__share-container', { 'app__share-container_opened': this.state.showShare })}
                        jc="space-around"
                        ai="center"
                        width="auto"
                        height="auto"
                    >
                        <FacebookShareButton url={shareUrl} quote={quote}>
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <WhatsappShareButton url={shareUrl} quote={quote}>
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        <TelegramShareButton url={shareUrl} quote={quote}>
                            <TelegramIcon size={32} round />
                        </TelegramShareButton>
                        <EmailShareButton url={shareUrl} quote={quote}>
                            <EmailIcon size={32} round />
                        </EmailShareButton>
                    </Row>
                    <div
                        onClick={this.toggleShare}
                        className={cx('app__share-hider', { 'app__share-hider_opened': this.state.showShare })}
                    >
                        <p>{this.state.showShare ? '-' : '+'}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
