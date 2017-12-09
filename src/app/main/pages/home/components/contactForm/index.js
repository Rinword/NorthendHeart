import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.css';

class ContactForm extends React.PureComponent {
    render() {
        return (
            <div className={cx('home__contact-form')}>
                <div>Title</div>
                <span>form</span>
            </div>
        );
    }
}

ContactForm.displayName = 'ContactForm';

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    draft: PropTypes.object,
};

ContactForm.defaultProps = {
    draft: {},
};

export default ContactForm;
