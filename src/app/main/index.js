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
                    onSelectPage={this.props.onSelectPage}
                    pages={[
                        {
                            component: Home,
                            props: {
                                id: 'slide0',
                                onMenuClick: this.props.onSelectPage
                            },
                        },
                        {
                            component: Features,
                            props: {
                                id: 'slide1'
                            },
                        },
                        {
                            component: Projects,
                            props: {
                                id: 'slide2'
                            },
                        },
                        {
                            component: Lifestyle,
                            props: {
                                id: 'slide3'
                            },
                        },
                    ]}
                />
            </div>
        );
    }
}

export default Main;