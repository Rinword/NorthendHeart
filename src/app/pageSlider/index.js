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
            if (!this.state.isScrollNow) {
                let direction = null;
                if (evt.wheelDelta >= 0) direction = 'up';
                if (evt.wheelDelta < 0) direction = 'down';
                const currPageNumber = parseInt(this.props.activePage.replace(/\D+/, ''), 10);

                if (direction === 'up' && currPageNumber >= 1) {
                    const currSlide = `slide${currPageNumber - 1}`;
                    this.props.onSelectPage(currSlide);
                }
                if (direction === 'down' && currPageNumber < this.props.pages.length - 1) {
                    const currSlide = `slide${currPageNumber + 1}`;
                    this.props.onSelectPage(currSlide);
                }
            } else {
                this.scrollTo(this.props.activePage);
                return true;
            }
        };

        // window.onscroll = evt => {
        //     if (this.state.isScrollNow) {
        //         return false;
        //     }
        // };

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
        if (nextProps.activePage !== this.props.activePage) {
            this.scrollTo(nextProps.activePage);
        }
    }

    render() {
        //TODO component inside props
        return (
            <div ref="content" className="ux-page-slider">
                {this.props.pages.map(Page => {
                    return <Page.component key={Page.id} {...Page} isActive={this.props.activePage === Page.id} />;
                })}
            </div>
        );
    }
}

export default PageSlider;
