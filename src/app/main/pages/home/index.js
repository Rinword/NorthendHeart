import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.css';

class Home extends React.PureComponent {

    render() {
        return (
            <div id={this.props.id} className={cx("home", {'slide_active': this.props.isActive})}>
                <div className="home__background"/>
                <div className="home__content">
                    <div className="home__title">Northern Heart</div>
                </div>

            </div>
        );
    }
}

export default Home;