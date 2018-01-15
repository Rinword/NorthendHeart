import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { Btn } from '../UxBox';

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
            displayView,
            // leftBorderWidth,
            // leftBorderColor,
            description,
            addBtnShown,
            className,
        } = this.props;
        return (
            <div className={cx('ux-info-panel', `ux-info-panel_view_${displayView}`, [className])}>
                <div className="ux-info-panel__left-border" />
                <div className="ux-info-panel__top-content">
                    <img src={img} />
                    <div className="ux-info-panel__title-section">
                        <h3 className="ux-info-panel__title">{title}</h3>
                        <p className="ux-info-panel__sub-title">{subTitle}</p>
                    </div>
                    <div className="ux-info-panel__bottom-section">
                        {description && <description />}
                        {addBtnShown && (
                            <div className="ux-info-panel__bottom-section">
                                <Btn onClicl={this.onAddClick}>Подробнее</Btn>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

InfoPanel.displayName = 'InfoPanel';

InfoPanel.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    displayView: PropTypes.oneOf(['', 'link', 'material', 'personal', 'constructor']),
    leftBorderWidth: PropTypes.number,
    leftBorderColor: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    addBtnShown: PropTypes.bool,
    className: PropTypes.string,
};

InfoPanel.defaultProps = {
    leftBorderWidth: 2,
    leftBorderColor: '#dedede',
    displayView: '',
    description: false,
    addBtnShown: false,
    className: '',
};

export default InfoPanel;
