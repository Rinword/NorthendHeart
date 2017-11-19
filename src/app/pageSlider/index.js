import React from 'react';
import PropTypes from 'prop-types';
// import cx from 'classnames';
import { animatedScrollTo } from '../../utils';

import './style.css';

class PageSlider extends React.PureComponent {
    static propTypes = {
        pages: PropTypes.array.isRequired,
        activePage: PropTypes.number,
    };
    static defaultProps = {
        activePage: 0,
    };

    constructor(props) {
        super(props);

        this.state = {
            pageHeight: 0,
        }
    }

    componentDidMount() {
        const height = this.refs.content.clientHeight;
        this.setState({pageHeight: height});
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.activePage !==this.props.activePage) {
            // animatedScrollTo(0, nextProps.activePage * this.state.pageHeight) //TODO not works
            window.scrollTo(0, nextProps.activePage * this.state.pageHeight);
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