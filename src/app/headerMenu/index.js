import React from 'react';
import { Row } from '../uxComponent/UxBox';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import logo from '../../static/icons/logo.png'; //TODO set absolute path and get svg icon
import './style.css';
import menuConfig from '../content/menuConfig';

class HeaderMenu extends React.PureComponent {
    constructor(props) {
        super(props);

        this.date = new Date();
    }

    render() {
        const activePage = this.props.activePage;
        const date = `build#55 (${this.date.getDate()}.${
            this.date.getMonth() + 1 < 10 ? '0' + (this.date.getMonth() + 1).toString() : this.date.getMonth() + 1
        }.${this.date.getFullYear()})`;
        return (
            <Row
                jc="space-between"
                ai="center"
                cls={cx([this.props.cls], 'header-menu', { 'header-menu_transparent': activePage === 'slide0' })}
            >
                <img src={logo} className="header-menu__logo" alt="logo" />
                <div className="header-menu__title">PLUS MODUL</div>
                <div style={{ marginLeft: '155px', flex: '0 0 200px' }}>{date}</div>
                <Row flexGrow="0" jc="flex-end" ai="center" cls="header-menu__options-container">
                    {menuConfig.map(item => (
                        <span
                            key={item.id}
                            className={cx('header-menu__item', { 'header-menu__item_active': activePage === item.id })}
                            onClick={() => this.props.onSelectItem(item.id)}
                        >
                            {item.title}
                        </span>
                    ))}
                </Row>
            </Row>
        );
    }
}

export default HeaderMenu;
