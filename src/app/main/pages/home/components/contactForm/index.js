import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Formsy from 'formsy-react';
import { Row, Column, Btn, Field } from '../../../../../uxComponent/UxBox';

import './style.css';

class ContactForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isValid: false,
        };

        this.submit = data => {
            this.props.onSubmit(data);
        };

        this.enableButton = () => {
            this.setState({ isValid: true });
        };

        this.disableButton = () => {
            this.setState({ isValid: false });
        };
    }

    render() {
        return (
            <Column width="auto" cls={cx('home__contact-form contact-form')}>
                <div className={'contact-form__title'}>Заполните форму</div>
                <div className={'contact-form__form-wrap'}>
                    <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                        {/*<Field*/}
                            {/*name="subject"*/}
                            {/*title="Тема"*/}
                            {/*validations="minLength:5"*/}
                            {/*validationError="Не менее 5 символов"*/}
                            {/*required*/}
                        {/*/>*/}
                        {/*<Field*/}
                            {/*name="name"*/}
                            {/*title="Ваше имя"*/}
                            {/*validations="minLength:5"*/}
                            {/*validationError="Не менее 3 символов"*/}
                            {/*required*/}
                        {/*/>*/}
                        <Field name="phone" title="Телефон" required />
                        <Btn disabled={!this.state.isValid}>Submit</Btn>
                    </Formsy>
                </div>
            </Column>
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
