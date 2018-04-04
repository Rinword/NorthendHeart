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
            activeSlide: 1,
            legendHidden: props.legendHidden || true,
            hasSlick: false,
        };

        this.afterChange = index => {
            this.setState({ activeSlide: index, legendBlurred: false, btnMove: true });
            setTimeout(() => {
                this.setState({ btnMove: false });
            }, 2000);
        };

        this.beforeChange = (oldIndex, newIndex) => {
            this.setState({ legendBlurred: true });
        };

        this.toggleLegendViewMode = () => {
            this.setState({ legendHidden: !this.state.legendHidden });
        };

        this.next = () => {
            this.slider.getRef().slickNext();
        };
        this.prev = () => {
            this.slider.getRef().slickPrev();
        };
    }

    componentWillReceiveProps(nextProps) {
        const hasSlick = this.state.hasSlick;
        if (!hasSlick && nextProps.isActive) {
            setTimeout(() => {
                this.slider.getRef().slickGoTo(0);
                !hasSlick && this.setState({ hasSlick: true });
            }, 300);
        }
    }

    render() {
        const legendHidden = this.state.legendHidden;
        const btnMove = this.state.btnMove;
        const activeSlide = this.props.slides[this.state.activeSlide];
        // !~activeSlide.sections.indexOf('?') && activeSlide.sections.push(['?']);

        return (
            <div className={cx('ux-slider-wrap', { 'ux-slider-wrap_legend-hidden': legendHidden })}>
                <div
                    className={cx(
                        'ux-slider-wrap__hide-btn',
                        { bg_color_black_07: legendHidden },
                        { 'ux-slider-wrap__hide-btn_disturbed': legendHidden && btnMove }
                    )}
                    onClick={this.toggleLegendViewMode}
                >
                    <div
                        className={cx(
                            'icon icon_bg-size_24 icon_size_24',
                            legendHidden ? 'icon_visibility_on' : 'icon_visibility_off'
                        )}
                    />
                </div>
                <div className={cx('ux-slider-legend-mini', { 'ux-slider-legend-mini_hidden': !legendHidden })}>
                    {activeSlide.title}
                </div>
                <div className={cx('ux-slider-legend', { 'ux-slider-legend_hidden': legendHidden })}>
                    <div className="ux-slider-legend__slide-btns no_blur">
                        <div className="ux-slider-legend__slide-btn" onClick={this.prev}>
                            <div className="icon icon_prev icon_bg-size_18 icon_size_24" />
                        </div>
                        <div className="ux-slider-legend__slide-btn" onClick={this.next}>
                            <div className="icon icon_next icon_bg-size_18 icon_size_24" />
                        </div>
                    </div>
                    <div className="ux-slider-legend__title">{activeSlide.title}</div>
                    <div className="ux-slider-legend__sections">
                        <p>Проект состоит из секций:</p>
                        <section>{activeSlide.sections.map(i => <div key={i}>{i}</div>)}</section>
                    </div>
                    <div
                        className="ux-slider-legend__description"
                        dangerouslySetInnerHTML={{ __html: activeSlide.description }}
                    />

                    <TabPanel tabs={activeSlide.tabs} />
                    <PhotoSlides
                        title={this.props.photosTitle}
                        photos={activeSlide.photos || []}
                        photos_mini={activeSlide.photos_mini || []}
                        className="ux-slider-legend__photos"
                    />
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
