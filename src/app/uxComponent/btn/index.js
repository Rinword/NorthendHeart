import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.css';
class Btn extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = () => {
            this.props.onClick && this.props.onClick();
        };
    }

    renderInnerIcon() {
        return <div className={'ux-btn__inner-icon icon icon_' + this.props.innerIconName} />;
    }

    render() {
        return (
            <button
                className={cx(
                    'ux-btn ' + (this.props.cls ? this.props.cls : ''),
                    { 'ux-btn_alt': this.props.alt },
                    { 'ux-btn_disabled': this.props.disabled }
                )}
                onClick={!this.props.disabled ? this.onClick : undefined}
            >
                {this.props.children}
                {this.props.innerIconName && this.renderInnerIcon()}
            </button>
        );
    }
}

Btn.displayName = 'Btn';

Btn.propTypes = {
    cls: PropTypes.string,
    alt: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Btn;
