import React from 'react';
import { Row } from '../uxComponent/UxBox';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import logo from '../../static/img/logo.svg'; //TODO set absolute path
import './style.css';

class HeaderMenu extends React.PureComponent {
    render() {
        return (
            <Row jc="space-between" ai="center" cls={cx([this.props.cls], 'header-menu')}>
                <img src={logo} className="app__logo" alt="logo" />
                <Row flexGrow="0" jc="flex-end" ai="center" cls="header-menu__options-container">
                    <span>Contact</span>
                    <span>Projects</span>
                    <span>Control</span>
                    <span>News</span>
                </Row>


            </Row>
        );
    }
}

export default HeaderMenu;