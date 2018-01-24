import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ReactIntense from '../../../../../libs/react-intense/ReactIntense';
import Lightbox from 'react-images';
import './style.css';

class CustomSlider extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            slideId: 1,
        };

        this.afterChange = index => {
            this.props.afterChange && this.props.afterChange(index);
        };

        this.beforeChange = (oldIndex, newIndex) => {
            this.props.beforeChange && this.props.beforeChange(oldIndex, newIndex);
        };

        this.getRef = () => {
            return this.ref;
        };

        this.formattedSlides = this.props.photos.map(slide => {
            return { src: slide };
        });

        this.onClick = () => {
            this.setState({ isOpen: true });
        };
        this.onClose = () => {
            this.setState({ isOpen: false });
        };

        console.log(this.formattedSlides);
    }

    render() {
        return (
            <div>
                <Slider
                    className={cx(this.props.className, 'ux-photo-slider')}
                    dots={false}
                    infinite={false}
                    speed={300}
                    slidesToShow={2}
                    slidesToScroll={1}
                    beforeChange={this.beforeChange}
                    afterChange={this.afterChange}
                    ref={sl => (this.ref = sl)}
                >
                    {this.props.photos.map(slide => (
                        <div key={slide.index} className="ux-photo-slider__slide" onClick={this.onClick}>
                            <img className={cx('ux-full-slider__img', [slide.srcCls])} src={slide} alt="" />
                        </div>
                    ))}
                </Slider>
                <Lightbox
                    images={[this.formattedSlides]}
                    isOpen={this.state.isOpen}
                    onClickPrev={this.onClick}
                    onClickNext={this.onClick}
                    onClose={this.onClose}
                />
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
