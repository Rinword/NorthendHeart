import React from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import { scroller, Events, scrollSpy } from 'react-scroll';

import './style.css';

class PageSlider extends React.PureComponent {
    static propTypes = {
        pages: PropTypes.array.isRequired,
        activePage: PropTypes.number,
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
            if(this.state.isScrollNow) {
                console.log('shit')
                // evt.returnValue = false;
                // evt.wheelDelta = 0;
                // evt.preventDefault();
                return false;
            }
        };

        window.onscroll = (evt) => {
            console.log('scroll');
            if(this.state.isScrollNow) return false;
            console.log('--scroll');
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            if(this.isUp) {
                this.scrollTo('slide' + (Math.floor(scrolled/this.state.pageHeight)))
            }
            if(!this.isUp) {
                this.scrollTo('slide' + Math.ceil(scrolled/this.state.pageHeight))
            }
        };

        this.scrollTo = (id) => {
            scroller.scrollTo(id, {
                duration: 600,
                delay: 0,
                smooth: 'easeInOut'
            })
        }
    }

    componentDidMount() {
        const height = window.innerHeight;
        this.setState({pageHeight: height});
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.activePage !== this.props.activePage) {
            this.scrollTo('slide' + nextProps.activePage);
        }
    }

    render() {
        return (
            <div ref="content" className="ux-page-slider">
                {this.props.pages.map(Page => Page)}
            </div>
        );
    }
}

export default PageSlider;

// document.onmousewheel = function(){ stopWheel(); } /* IE7, IE8 */
// if(document.addEventListener){ /* Chrome, Safari, Firefox */
//     document.addEventListener('DOMMouseScroll', stopWheel, false);
// }
//
// function stopWheel(e){
//     if(!e){ e = window.event; } /* IE7, IE8, Chrome, Safari */
//     if(e.preventDefault) { e.preventDefault(); } /* Chrome, Safari, Firefox */
//     e.returnValue = false; /* IE7, IE8 */
// }
// //Re-enabling the Wheel
// document.onmousewheel = null;  /* IE7, IE8 */
// if(document.addEventListener){ /* Chrome, Safari, Firefox */
//     document.removeEventListener('DOMMouseScroll', stopWheel, false);
// }