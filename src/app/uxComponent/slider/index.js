import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './style.css';

class CustomSlider extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            activeSlide: 0,
        };

        this.afterChange = index => {

        };

        // this.beforeChange = (oldIndex, newIndex) => {
        //     this.setState({ activeSlide: newIndex });
        // };
    }

    render() {
        return (
            <div className="ux-slider-wrap">
                <div className="ux-slider-legend">
                    <div className="ux-slider-legend__title">Gjgjdf</div>
                </div>
                <Slider
                    className="ux-full-slider"
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    beforeChange={this.beforeChange}
                    afterChange={this.afterChange}
                >
                    {this.props.slides.map(slide => (
                        <div key={slide.index} className="ux-full-slider__slide">
                            <div className={cx('ux-full-slider__img', [slide.srcCls])} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

CustomSlider.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object),
};

CustomSlider.defaultProps = {
    slides: [],
};

export default CustomSlider;
