import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import { scroller, Events, Element } from 'react-scroll';

import './style.css';

//TODO off mousewheel during scroll

class PageSlider extends React.PureComponent {
    static propTypes = {
        pages: PropTypes.array.isRequired,
        activePage: PropTypes.string,
    };
    static defaultProps = {
        activePageId: 'slide0',
    };

    constructor(props) {
        super(props);

        this.state = {
            pageHeight: 0,
            isScrollNow: false,
        };

        Events.scrollEvent.register('begin', ()=> {
            this.setState({ isScrollNow: true });
        });
        Events.scrollEvent.register('end', ()=> {
            this.setState({ isScrollNow: false });
        });

        window.onwheel = (evt) => {
            this.isUp = evt.wheelDelta >= 0;
        };

        window.onscroll = (evt) => {
            if(this.state.isScrollNow) return false;
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            if(this.isUp) {
                const currSlide = 'slide' + (Math.floor(scrolled/this.state.pageHeight));
                this.scrollTo(currSlide)
                this.props.onSelectPage(currSlide)
            }
            if(!this.isUp) {
                const currSlide = 'slide' + (Math.ceil(scrolled/this.state.pageHeight));
                this.scrollTo(currSlide)
                this.props.onSelectPage(currSlide)
            }
        };

        this.scrollTo = (id) => {
            scroller.scrollTo(id, {
                duration: 600,
                delay: 0,
                smooth: 'easeInOut'
            })
        };

    }

    componentDidMount() {
        const height = window.innerHeight;
        this.setState({pageHeight: height});

        // document.addEventListener('mousewheel', (e)=> {
        //     if(this.state.isScrollNow) {
        //         window.onscroll(e);
        //     }
        // }, false);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.activePage !== this.props.activePage) {
            this.scrollTo(nextProps.activePage);
        }
    }

    render() {
        return (
            <div ref="content" className="ux-page-slider">
                {this.props.pages.map(Page =>
                    <Page.component
                        key={Page.props.id}
                        {...Page.props}
                        isActive={this.props.activePage === Page.props.id}
                    />)}
            </div>
        );
    }
}

export default PageSlider;