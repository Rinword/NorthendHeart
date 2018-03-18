import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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

import { Row } from '../uxComponent/UxBox';

import './style.css';

class SocialShare extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            showShare: false,
        };

        this.toggleShare = () => {
            this.setState({ showShare: !this.state.showShare });
        };
    }

    render() {
        const shareUrl = 'https://plusmodul.com';
        const quote = 'PLUSMODUL';
        return (
            <div className="share-social">
                <Row
                    cls={cx('share-social__share-container', this.props.className, {
                        'share-social__share-container_opened': this.state.showShare,
                    })}
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
                    className={cx('share-social__share-hider', {
                        'share-social__share-hider_opened': this.state.showShare,
                    })}
                >
                    <p>{this.state.showShare ? '-' : '+'}</p>
                </div>
            </div>
        );
    }
}

SocialShare.propTypes = {
    className: PropTypes.string,
};

SocialShare.displayName = 'SocialShare';

SocialShare.defaultProps = {
    className: '',
};

export default SocialShare;
