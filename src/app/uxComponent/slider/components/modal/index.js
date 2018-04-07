import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Modal from 'react-modal';

import './styles.css';

class CompModal extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    // componentDidMount() {
    //     window.onwheel = () => {
    //         return false;
    //     };
    // }
    //
    // componentWillUnmount() {
    //     window.onwheel = () => {
    //         return true;
    //     };
    // }

    render() {
        return (
            <Modal
                style={{
                    content: {
                        zIndex: 20,
                        bottom: 'auto',
                        backgroundColor: 'rgba(0,0,0, 0.9)',
                        borderRadius: 'none',
                    },
                    overlay: { zIndex: 20, backgroundColor: 'rgba(0,0,0, 0.5)' },
                }}
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onRequestClose}
                closeTimeoutMS={200}
            >
                <div
                    onClick={this.props.onRequestClose}
                    className={cx('ux-slider-legend__compl')}
                    dangerouslySetInnerHTML={{ __html: this.props.modal }}
                />
            </Modal>
        );
    }
}

CompModal.propTypes = {
    className: PropTypes.string,
    modal: PropTypes.string.isRequired,
    isOpen: PropTypes.string,
    onRequestClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

CompModal.defaultProps = {
    className: '',
    isOpen: false,
};

export default CompModal;
