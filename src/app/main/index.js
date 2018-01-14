import React from 'react';
// import PropTypes from 'prop-types';
// import cx from 'classnames';

import PageSlider from '../pageSlider';

import Home from './pages/home';

import contentData from '../contentData';

import './style.css';

class Main extends React.PureComponent {
    constructor(props) {
        super(props);

        //additional props, callbacks, overrides
        const specProps = {
            home: {
                onMenuClick: props.onSelectPage,
            },
        };
        this.formattedPages = contentData.map(item => {
            return { ...item, ...specProps[item.name] };
        });
    }
    render() {
        return (
            <div className="main-content">
                <PageSlider
                    activePage={this.props.activePage}
                    onSelectPage={this.props.onSelectPage}
                    pages={this.formattedPages}
                />
            </div>
        );
    }
}

export default Main;
