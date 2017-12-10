import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import rStyle from './style.css';

/**
 Using example
 <Modal
     isOpen={ bool }  // show/hide modal
     style={{ top, left, width, height, padding }}  // position of modal, center by default
     onRequestClose={ props.onRequestClose } // call by click on closeBtn or shadow mask around the modal
 >
    { children } // all content inside the modal
 </Modal>;
 */

const defaultStyle = {
    top: '25%',
    left: 'calc(50% - 175px)',
    bottom: 'auto',
    padding: '0',
    width: '350px',
    height: 'auto',
};

const defaultOverlay = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
};
// style={customStyles}-

class rModal extends React.PureComponent {
    render() {
        const { className, hideCloseBtn, style, overlay, overlayClassName, ...params } = this.props;
        const customStyles = {
            content: Object.assign({}, defaultStyle, style),
            overlay: Object.assign({}, defaultOverlay, overlay),
        };

        const Cls = className || '';
        return (
            <Modal
                {...params}
                closeTimeoutMS={this.props.closeTimeoutMS || 200}
                contentLabel={'Modal'}
                className={{
                    base: Cls + ' ux-modal__content',
                    afterOpen: 'ux-modal__content_after-open',
                    beforeClose: 'ux-modal__content_before-close',
                }}
                overlayClassName={
                    overlayClassName || {
                        base: 'ux-modal__overlay',
                        afterOpen: 'ux-modal__overlay_after-open',
                        beforeClose: 'ux-modal__overlay_before-close',
                    }
                }
                style={customStyles}
            >
                {this.props.children}
                {!hideCloseBtn && <CloseBtn onRequestClose={this.props.onRequestClose} />}
            </Modal>
        );
    }
}

class CloseBtn extends React.PureComponent {
    render() {
        const { onRequestClose } = this.props;
        return (
            <div onClick={onRequestClose} className="ux-modal__close-btn">
                <div />
            </div>
        );
    }
}

rModal.displayName = 'ModalWindow';
rModal.propTypes = {
    className: PropTypes.string,
    hideCloseBtn: PropTypes.bool,
    style: PropTypes.object,
    overlayClassName: PropTypes.string,
};

export default rModal;
