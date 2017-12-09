import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.css';

class Features extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('features', { slide_active: this.props.isActive })}>
                Features
            </div>
        );
    }
}

export default Features;
