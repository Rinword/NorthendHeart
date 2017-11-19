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
                    <span onClick={()=> this.props.onSelectItem(0)} >Contact</span>
                    <span onClick={()=> this.props.onSelectItem(1)} >Projects</span>
                    <span onClick={()=> this.props.onSelectItem(2)} >Control</span>
                    <span onClick={()=> this.props.onSelectItem(3)} >News</span>
                </Row>


            </Row>
        );
    }
}

export default HeaderMenu;