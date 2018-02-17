import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import { Slider } from '../../../uxComponent/UxBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from '../../../../content';

import './style.css';
import '../../../uxComponent/slider/style.css';

import { Desktop, Mobile } from '../../../uxComponent/Responsive';

class Projects extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('projects', { slide_active: this.props.isActive })}>
                <Desktop>
                    <Slider slides={projects} isActive={this.props.isActive} />
                </Desktop>
                <Mobile>
                    <Slider slides={projects} isActive={this.props.isActive} legendHidden={true} />
                </Mobile>
            </div>
        );
    }
}
export default Projects;
