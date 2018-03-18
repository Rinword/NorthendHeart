import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// import './style.scss';

class Class extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={cx('class', this.props.className)}>
                <div />
            </div>
        );
    }
}

Class.propTypes = {
    className: PropTypes.string,
};

Class.displayName = 'Class';

Class.defaultProps = {
    className: '',
};

export default Class;
