import React from 'react';
// import PropTypes from 'prop-types';
// import cx from 'classnames';

import PageSlider from '../pageSlider';

import Home from './pages/home';
import Features from './pages/features';
import Projects from './pages/projects';
import Lifestyle from './pages/lifeStyle';

import './style.css';

class Main extends React.PureComponent {

    render() {
        return (
            <div className="main-content">
                <PageSlider
                    activePage={this.props.activePage}
                    pages={[
                        <Home key="home-slide" id="slide0"/>,
                        <Features key="feature-slide" id="slide1"/>,
                        <Projects key="projects" id="slide2"/>,
                        <Lifestyle key="lifestyle" id="slide3"/>,
                    ]}
                />
            </div>
        );
    }
}

export default Main;