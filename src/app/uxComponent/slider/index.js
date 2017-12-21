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
            this.setState({ activeSlide: index });
        };

        // this.beforeChange = (oldIndex, newIndex) => {
        //     setTimeout(() => {
        //         this.setState({ activeSlide: newIndex });
        //     }, 500);
        // };
    }

    componentDidMount() {
        // const resizeEvent = document.createEvent('HTMLEvents');
        // resizeEvent.initEvent('resize', true, true);
        // // console.log('triggering resize...');
        // // this.sliderRef.dispatchEvent(resizeEvent);
        // const slider = document.getElementsByClassName('ux-full-slider')[0];
        // slider.dispatchEvent(resizeEvent);
    }

    render() {
        console.log(this.state);
        return (
            <div className="ux-slider-wrap">
                <div className="ux-slider-legend">
                    <div className="ux-slider-legend__title">{this.props.slides[this.state.activeSlide].title}</div>
                    <div className="ux-slider-legend__description">{this.props.slides[this.state.activeSlide].description}</div>
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
