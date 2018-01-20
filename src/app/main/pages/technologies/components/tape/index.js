import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

class TabPanelC extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hideDesc: false,
        };

        this.onClick = () => {
            this.setState({ hideDesc: !this.state.hideDesc });
        };
    }

    render() {
        const { title, description, img, width } = this.props;
        return (
            <div className={cx('tape')} style={{ flex: `0 0 ${width}%` }} onClick={this.onClick}>
                <div className={cx('tape__img')}>
                    <img src={img} alt="" />
                </div>
                <div className={cx('tape__title')}>{title}</div>
                <div
                    className={cx('tape__desc', { tape__desc_hidden: this.state.hideDesc })}
                    dangerouslySetInnerHTML={{ __html: description }}
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
    getRef: PropTypes.func,
};

TabPanelC.defaultProps = {
    tabs: [],
    ref: () => {},
};

export default TabPanelC;
