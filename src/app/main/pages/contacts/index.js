import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.css';

class Contacts extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('contacts', { slide_active: this.props.isActive })}>
                Contacts
            </div>
        );
    }
}

export default Contacts;
