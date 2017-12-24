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

        this.afterChange = index => {
            this.props.afterChange && this.props.afterChange(index);
        };

        this.beforeChange = (oldIndex, newIndex) => {
            this.props.beforeChange && this.props.beforeChange(oldIndex, newIndex);
        };

        this.getRef = () => {
            return this.ref;
        }
    }

    render() {
        return (
            <Slider
                className="ux-full-slider"
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                beforeChange={this.beforeChange}
                afterChange={this.afterChange}
                ref={sl => (this.ref = sl)}
            >
                {this.props.slides.map(slide => (
                    <div key={slide.index} className="ux-full-slider__slide">
                        <div className={cx('ux-full-slider__img', [slide.srcCls])} />
                    </div>
                ))}
            </Slider>
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
