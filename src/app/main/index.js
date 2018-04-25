import React from 'react';

import PageSlider from '../pageSlider';

import { menu } from 'content';
import Home from './pages/home';
import Features from './pages/features';
import Projects from './pages/projects';
import Tech from './pages/technologies';
import Contacts from './pages/contacts';

import './style.css';

const components = {
    home: Home,
    projects: Projects,
    features: Features,
    technologies: Tech,
    contacts: Contacts,
};

class Main extends React.PureComponent {
    constructor(props) {
        super(props);

        //additional props, callbacks, overrides
        const specProps = {
            home: {
                onMenuClick: props.onSelectPage,
            },
        };
        this.formattedPages = menu.map(item => {
            return { ...item, component: components[item.name], ...specProps[item.name] };
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
