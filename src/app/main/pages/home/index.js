import React from 'react';
// import PropTypes from 'prop-types';
// import cx from 'classnames';

import './style.css';

class Home extends React.PureComponent {

    render() {
        return (
            <div id={this.props.id} className="home">
                Home slide
            </div>
        );
    }
}

export default Home;