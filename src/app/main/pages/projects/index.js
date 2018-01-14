import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import { Slider } from '../../../uxComponent/UxBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getDataByName } from '../../../contentData';

import './style.css';
import '../../../uxComponent/slider/style.css';

// import house1 from '../../../../static/img/projects/house1.jpg';
// import house2 from '../../../../static/img/projects/house2.jpg';
// import house3 from '../../../../static/img/projects/house3.jpg';

class Projects extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('projects', { slide_active: this.props.isActive })}>
                <Slider slides={getDataByName(this.props.name)} />
            </div>
        );
    }
}

export default Projects;
