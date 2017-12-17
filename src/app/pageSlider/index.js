import React from 'react';
import PropTypes from 'prop-types';
import { scroller, Events } from 'react-scroll';

import './style.css';

//TODO off mousewheel during scroll

class PageSlider extends React.PureComponent {
    static propTypes = {
        pages: PropTypes.array.isRequired,
        activePage: PropTypes.string,
    };
    static defaultProps = {
        activePage: 'slide0',
    };

    constructor(props) {
        super(props);

        this.state = {
            pageHeight: 0,
            isScrollNow: false,
        };

        Events.scrollEvent.register('begin', () => {
            this.setState({ isScrollNow: true });
        });
        Events.scrollEvent.register('end', () => {
            this.setState({ isScrollNow: false });
        });

        window.onwheel = evt => {
            if (evt.wheelDelta >= 0) this.isUp = 'up';
            if (evt.wheelDelta < 0) this.isUp = 'down';
        };

        window.onscroll = evt => {
            if (this.state.isScrollNow) {
                return false;
            }

            if (!this.isUp) {
                return true;
            }
            const currPageNumber = parseInt(this.props.activePage.replace(/\D+/, ''));
            // if (currPageNumber <= 0 || currPageNumber >= this.props.pages.length - 1) {
            //     return false;
            // }
            console.log('svroll', currPageNumber);
            if (this.isUp === 'up') {
                const currSlide = `slide${currPageNumber - 1}`;
                this.props.onSelectPage(currSlide);
                return true;
            }
            if (this.isUp === 'down') {
                const currSlide = `slide${currPageNumber + 1}`;
                this.props.onSelectPage(currSlide);
                return true;
            }

            this.isUp = null;
        };

        this.scrollTo = id => {
            scroller.scrollTo(id, {
                duration: 600,
                delay: 0,
                smooth: 'easeInOut',
            });
        };
    }

    componentDidMount() {
        const height = window.innerHeight;
        this.setState({ pageHeight: height });

        // document.addEventListener('mousewheel', (e)=> {
        //     if(this.state.isScrollNow) {
        //         window.onscroll(e);
        //     }
        // }, false);
    }

    componentWillReceiveProps(nextProps) {
        console.log('scroll to ', nextProps, this.props.activePage);
        if (nextProps.activePage !== this.props.activePage && !this.state.isScrollNow) {
            this.scrollTo(nextProps.activePage);
        }
    }

    render() {
        return (
            <div ref="content" className="ux-page-slider">
                {this.props.pages.map(Page => (
                    <Page.component
                        key={Page.props.id}
                        {...Page.props}
                        isActive={this.props.activePage === Page.props.id}
                    />
                ))}
            </div>
        );
    }
}

export default PageSlider;
