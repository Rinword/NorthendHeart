import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import { Slider } from '../../../uxComponent/UxBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getDataByName } from '../../../contentData';

import './style.css';
import '../../../uxComponent/slider/style.css';

class Projects extends React.PureComponent {

    render() {
        return (
            <div id={this.props.id} className={cx('projects', { slide_active: this.props.isActive })}>
                <Slider photosTitle="Еще фото:" slides={getDataByName(this.props.name)} isActive={this.props.isActive} />
            </div>
        );
    }
}

export default Projects;
