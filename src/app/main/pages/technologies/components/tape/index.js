import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

class TabPanelC extends React.PureComponent {
    render() {
        const { title, description, img } = this.props;
        return (
            <div className={cx('tape')}>
                <img className={cx('tape__img')} src={img} />
                <div className={cx('tape__legend')}>
                    <div className={cx('tape__title')}>{title}</div>
                    <div className={cx('tape__desc')}>{description}</div>
                </div>
            </div>
        );
    }
}

TabPanelC.displayName = 'TabPanel';

TabPanelC.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

TabPanelC.defaultProps = {
    tabs: [],
};

export default TabPanelC;
