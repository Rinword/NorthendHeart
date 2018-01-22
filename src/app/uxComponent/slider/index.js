import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Slider from './slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import TabPanel from './components/tabs';
import PhotoSlides from './components/photos';

import './style.css';

class CustomSlider extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            activeSlide: 0,
            legendHidden: false,
        };

        this.afterChange = index => {
            this.setState({ activeSlide: index, legendBlurred: false });
        };

        this.beforeChange = (oldIndex, newIndex) => {
            this.setState({ legendBlurred: true });
        };

        this.toggleLegendViewMode = () => {
            this.setState({ legendHidden: !this.state.legendHidden });
        };

        this.goToProject = () => {
            console.log(this.props.slides[this.state.activeSlide].title);
        };

        this.goToProjects = () => {
            // push('/projects');
        };

        this.next = () => {
            this.slider.getRef().slickNext();
        };
        this.prev = () => {
            this.slider.getRef().slickPrev();
        };
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
        const legendHidden = this.state.legendHidden;
        return (
            <div className={cx('ux-slider-wrap', { 'ux-slider-wrap_show_next': legendHidden })}>
                <div
                    className={cx('ux-slider-wrap__hide-btn', { bg_color_black_07: legendHidden })}
                    onClick={this.toggleLegendViewMode}
                >
                    <div
                        className={cx(
                            'icon icon_bg-size_24 icon_size_24',
                            legendHidden ? 'icon_visibility_on' : 'icon_visibility_off'
                        )}
                    />
                </div>
                <div
                    className={cx(
                        'ux-slider-legend',
                        { 'ux-slider-legend_blurred': this.state.legendBlurred },
                        { 'ux-slider-legend_hidden': this.state.legendHidden }
                    )}
                >
                    <div className="ux-slider-legend__slide-btns no_blur">
                        <div className="ux-slider-legend__slide-btn" onClick={this.prev}>
                            <div className="icon icon_prev icon_bg-size_18 icon_size_24" />
                        </div>
                        <div className="ux-slider-legend__slide-btn" onClick={this.next}>
                            <div className="icon icon_next icon_bg-size_18 icon_size_24" />
                        </div>
                    </div>
                    <div className="ux-slider-legend__title">{this.props.slides[this.state.activeSlide].title}</div>
                    <div className="ux-slider-legend__description">
                        {this.props.slides[this.state.activeSlide].description}
                    </div>

                    <TabPanel tabs={this.props.slides[this.state.activeSlide].tabs} />
                    <PhotoSlides
                        title={this.props.photosTitle}
                        photos={this.props.slides[this.state.activeSlide].photos || []}
                        className="ux-slider-legend__photos"
                    />
                    {/*<div className="ux-slider-legend__bottom-btns no_blur">*/}
                    {/*<div className="ux-slider-legend__btn" onClick={this.goToProject}>*/}
                    {/*Подробнее...*/}
                    {/*</div>*/}
                    {/*<div className="ux-slider-legend__btn" onClick={this.goToProjects}>*/}
                    {/*Ознакомиться с проектами*/}
                    {/*</div>*/}
                    {/*</div>*/}
                </div>
                <Slider
                    beforeChange={this.beforeChange}
                    afterChange={this.afterChange}
                    slides={this.props.slides}
                    ref={slider => (this.slider = slider)}
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
