import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.css';

class LifeStyle extends React.PureComponent {

    render() {
        return (
            <div id={this.props.id} className={cx("life-style", {'slide_active': this.props.isActive})}>
                LifeStyle
            </div>
        );
    }
}

export default LifeStyle;