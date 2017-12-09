import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.css';

class Projects extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('projects', { slide_active: this.props.isActive })}>
                Projects
            </div>
        );
    }
}

export default Projects;
