import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './style.css';
import '../../../uxComponent/slider/style.css';

class Projects extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('projects', { slide_active: this.props.isActive })}>
                <Slider
                    className="ux-full-slider"
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                >
                    <div>
                        <h3>1fsfsdfs</h3>
                    </div>
                    <div>
                        <h3>2sdfsdfsdf</h3>
                    </div>
                    <div>
                        <h3>3sdfsdfs</h3>
                    </div>
                    <div>
                        <h3>4sdfsdf</h3>
                    </div>
                    <div>
                        <h3>5sdfsdf</h3>
                    </div>
                    <div>
                        <h3>6sdfsd</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Projects;
