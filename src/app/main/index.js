import React from 'react';
// import PropTypes from 'prop-types';
// import cx from 'classnames';

import PageSlider from '../pageSlider';

import Home from './pages/home';
import Features from './pages/features';

import './style.css';

class Main extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            activePage: 0,
        }
    }

    render() {
        return (
            <div className="main-content">
                <PageSlider
                    pages={[
                        <Home key="home-slide" prop="dsdas"/>,
                        <Features key="feature-slide" prop="123123"/>,
                    ]}
                />
            </div>
        );
    }
}

export default Main;