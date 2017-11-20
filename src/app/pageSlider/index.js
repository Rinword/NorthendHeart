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

        // window.onscroll = () => {
        //     let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        //     console.log(scrolled, this.state.pageHeight);
        //     if(scrolled%this.state.pageHeight > 20 && !this.state.isScrollNow) {
        //         console.log(Math.ceil(scrolled/this.state.pageHeight));
        //         this.scrollTo('slide' + Math.ceil(scrolled/this.state.pageHeight))
        //     }
        // };

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