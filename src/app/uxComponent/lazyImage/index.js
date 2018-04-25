import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import clearGif from './clear.gif';
import preloader from './preloader.svg';
import loadError from './loadError.svg';

import './style.css';

class LazyImage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
        };

        this.getRef = ref => (this.wrap = ref);
        this.startLoading = this.startLoading.bind(this);
    }

    componentDidMount() {
        const isVisible = () => {
            const d = document.documentElement;
            const offset = Math.max(window.pageYOffset, d.scrollTop) + window.innerHeight;

            if (offset >= this.wrap.getBoundingClientRect().top) {
                this.startLoading();
                document.removeEventListener('scroll', isVisible);
            }
        };

        document.addEventListener('scroll', isVisible, false);
    }

    startLoading() {
        const img = new Image();

        img.onload = () => {
            setTimeout(() => {
                this.setState({
                    loaded: true,
                });
            }, 3200);
        };
        img.onerror = () => {
            this.setState({
                error: true,
            });
        };

        img.src = this.props.src;
    }

    render() {
        const { loaded, error } = this.state;
        const { thumbnailSrc } = this.props;

        return (
            <div className={cx('ux-image-loader', this.props.className)} ref={this.getRef}>
                {loaded && (
                    <img
                        className={cx(this.props.className, 'ux-image-loader__img', {
                            'ux-image-loader__img_loaded': loaded,
                        })}
                        src={this.props.src}
                        alt=""
                    />
                )}
                {!loaded && (
                    <img
                        className={cx(this.props.className, 'ux-image-loader__pre-img', {
                            'ux-image-loader__pre-img_loaded': loaded,
                        })}
                        src={thumbnailSrc || clearGif}
                        alt=""
                    />
                )}
                {!loaded && (
                    <div className={cx('ux-image-loader__preloader')}>
                        {!error && <img src={preloader} alt="Loading..." />}
                        {error && <img src={loadError} alt="Load error" />}
                    </div>
                )}
            </div>
        );
    }
}

LazyImage.propTypes = {
    src: PropTypes.string.isRequired,
    thumbnailSrc: PropTypes.string,
    async: PropTypes.bool,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
};

LazyImage.defaultProps = {
    src: PropTypes.string.isRequired,
    async: false,
    className: '',
    wrapperClassName: '',
};

export default LazyImage;
