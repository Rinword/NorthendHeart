import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

class TabPanelC extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onHover = evt => {
            props.onHover(props.i);
            evt.preventDefault();
            evt.stopPropagation();
        };

        this.onDescHover = evt => {
            const newId = props.showToLeft ? props.i - 1 : props.i + 1;
            props.onHover(newId);
            evt.preventDefault();
            evt.stopPropagation();
        };
    }

    render() {
        const { title, description, img, width, showToLeft, showDesc } = this.props;
        return (
            <div className={cx('tape')} style={{ flex: `0 0 ${width}%` }} onMouseEnter={this.onHover}>
                <div className={cx('tape__img')}>
                    <img src={img} alt="" />
                </div>
                <div className={cx('tape__title')}>{title}</div>
                <div
                    className={cx('tape__desc', { tape__desc_show_left: showToLeft }, { tape__desc_show: showDesc })}
                    dangerouslySetInnerHTML={{ __html: description }}
                    onClick={this.onDescHover}
                />
            </div>
        );
    }
}

TabPanelC.displayName = 'TabPanel';

TabPanelC.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    showToLeft: PropTypes.bool,
    darken: PropTypes.bool,
    getRef: PropTypes.func,
};

TabPanelC.defaultProps = {
    tabs: [],
    showToLeft: false,
    darken: false,
    ref: () => {},
};

export default TabPanelC;
