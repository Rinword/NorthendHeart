import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// import './style.css';

class HeaderMenu extends React.PureComponent {
    render() {
        return (
            <div className="header-menu">
                <span>Contact</span>
                <span>Projects</span>
                <span>Control</span>
                <span>News</span>
            </div>
        );
    }
}

export default HeaderMenu;