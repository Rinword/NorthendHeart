import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './style.css';

class InfoPanel extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onAddClick = () => {
            this.props.onAddClick && this.props.onAddClick();
        };
    }

    render() {
        const {
            img,
            title,
            subTitle,
            // leftBorderWidth,
            // leftBorderColor,
            className,
        } = this.props;
        return (
            <div className={cx('ux-info-panel', [className])}>
                <div className="ux-info-panel__left-border" />
                <div className="ux-info-panel__top-content">
                    <img src={img} alt="" />
                    <div className="ux-info-panel__title-section">
                        <h3 className="ux-info-panel__title">{title}</h3>
                        <p className="ux-info-panel__sub-title">{subTitle}</p>
                    </div>
                </div>
                <div className="ux-info-panel__bottom-content">{this.props.children}</div>
            </div>
        );
    }
}

InfoPanel.displayName = 'InfoPanel';

InfoPanel.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    // displayView: PropTypes.oneOf(['', 'link', 'material', 'personal', 'constructor']),
    leftBorderWidth: PropTypes.number,
    leftBorderColor: PropTypes.string,
    className: PropTypes.string,
};

InfoPanel.defaultProps = {
    leftBorderWidth: 2,
    leftBorderColor: '#dedede',
    // displayView: '',
    className: '',
};

export default InfoPanel;
