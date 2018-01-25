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
            this.formattedSlides = this.props.photos.map(slide => {
                return { src: slide };
            });
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

        this.onClick = i => {
            this.setState({ isOpen: true, slideId: i });
        };

        this.onPrevClick = () => {
            this.setState({ slideId: this.state.slideId - 1 });
        };
        this.onNextClick = () => {
            this.setState({ slideId: this.state.slideId + 1 });
        };

        this.onClose = () => {
            this.setState({ isOpen: false });
        };
    }

    componentWillReceiveProps(nextProps) {
        this.formattedSlides = nextProps.photos.map(slide => {
            return { src: slide };
        });
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
                    {this.props.photos.map((slide, i) => (
                        <div key={slide.index} className="ux-photo-slider__slide" onClick={()=> this.onClick(i)}>
                            <img className={cx('ux-full-slider__img', [slide.srcCls])} src={slide} alt="" />
                        </div>
                    ))}
                </Slider>
                <Lightbox
                    images={this.formattedSlides}
                    isOpen={this.state.isOpen}
                    onClickPrev={this.onPrevClick}
                    onClickNext={this.onNextClick}
                    onClose={this.onClose}
                    currentImage={this.state.slideId}
                    width={'calc(100vw - 150px)'}
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
