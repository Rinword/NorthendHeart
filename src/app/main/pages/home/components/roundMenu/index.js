import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Column, Btn } from "../../../../../uxComponent/UxBox";

import './style.css';

class RoundMenu extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            hoveredItem: 0,
        }
    }

    render() {
        const currItem = this.state.hoveredItem;
        const menuItems = this.props.menuItems;
        return (
            <div className={cx("ux-round-menu")}>
                <div className="ux-round-menu__center">
                    <div>{menuItems[currItem].name}</div>
                </div>
            </div>
        );
    }
}

RoundMenu.displayName = 'RoundMenu';

RoundMenu.propTypes = {
    menuItems: PropTypes.array.isRequired,
};

export default RoundMenu;