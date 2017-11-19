import React from 'react';
import PropTypes from 'prop-types';
// import cx from 'classnames';

import './style.css';

class PageSlider extends React.PureComponent {
    static propTypes = {
        pages: PropTypes.array.isRequired,
        activePage: PropTypes.number,
    };
    static defaultProps = {
        activePage: 0,
    };

    render() {
        return (
            <div className="ux-page-slider">
                {this.props.pages.map(Page => Page)}
            </div>
        );
    }
}

export default PageSlider;