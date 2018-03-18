import React from 'react';
import { Row, Column } from '../uxComponent/UxBox';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import Responsive from 'react-responsive';
import logo from '../../static/icons/logo.png';
import { menu } from '../../content';
import './style.css';

const Desktop = props => <Responsive {...props} minWidth={931} />;
const Mobile = props => <Responsive {...props} maxWidth={930} />;

class HeaderMenu extends React.PureComponent {
    constructor(props) {
        super(props);

        this.date = new Date();

        this.state = {
            menuOpen: false,
        };

        this.toggleMenuState = isOpen => {
            let menuOpen = this.state.menuOpen;

            if (typeof isOpen === 'boolean') {
                this.setState({ menuOpen: isOpen });
            } else {
                this.setState({ menuOpen: !menuOpen });
            }
        };

        this.onMenuClick = id => {
            this.props.onSelectItem(id);
        };
    }

    render() {
        const activePage = this.props.activePage;
        const date = `build#121 (${this.date.getDate()}.${
            this.date.getMonth() + 1 < 10 ? '0' + (this.date.getMonth() + 1).toString() : this.date.getMonth() + 1
        }.${this.date.getFullYear()})`;

        const isOpen = this.state.menuOpen;

        return (
            <div>
                <Desktop>
                    <div
                        className={cx([this.props.cls], 'header-menu', {
                            'header-menu_transparent': activePage === 'slide0',
                        })}
                    >
                        <img src={logo} className="header-menu__logo" alt="logo" />
                        <div className="header-menu__title">PLUS MODUL</div>
                        <div style={{ marginLeft: '155px', flex: '0 0 200px' }}>{date}</div>
                        <Row
                            flexGrow="0"
                            overflow="visible"
                            height="auto"
                            jc="flex-end"
                            ai="center"
                            cls="header-menu__options-container"
                        >
                            {menu.map(item => (
                                <span
                                    key={item.id}
                                    className={cx('header-menu__item', {
                                        'header-menu__item_active': activePage === item.id,
                                    })}
                                    onClick={() => this.onMenuClick(item.id)}
                                >
                                    {item.title}
                                </span>
                            ))}
                        </Row>
                    </div>
                </Desktop>
                <Mobile>
                    <div className={cx([this.props.cls], 'header-menu', 'header-menu_mobile')}>
                        <img src={logo} className="header-menu__logo" alt="logo" />
                        <div className="header-menu__title">PLUS MODUL</div>
                        {!isOpen && (
                            <Row jc="flex-end" ai="center" padding="0 20px 0 0">
                                <div
                                    className={cx('icon icon_size_22 icon_bg-size_contain icon_sandwich')}
                                    onClick={this.toggleMenuState}
                                />
                            </Row>
                        )}
                        <Column
                            flexGrow="0"
                            jc="center"
                            ai="stretch"
                            height="100vh"
                            cls={cx('header-menu__options-container', 'header-menu__options-container_vertical', {
                                'header-menu_hidden': !isOpen,
                            })}
                            onClick={this.toggleMenuState}
                        >
                            {menu.filter(i => !i.hideOnMobile).map(item => (
                                <span
                                    key={item.id}
                                    className={cx('header-menu__item', {
                                        'header-menu__item_active': activePage === item.id,
                                    })}
                                    onClick={() => this.onMenuClick(item.id)}
                                >
                                    {item.title}
                                </span>
                            ))}
                        </Column>
                    </div>
                </Mobile>
            </div>
        );
    }
}

export default HeaderMenu;
