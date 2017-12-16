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

        this.onChange = data => {
            this.props.onChange(data);
        };
    }

    render() {
        const draft = this.props.draft;
        return (
            <Column width="auto" cls={cx('home__contact-form contact-form')}>
                <div className={'contact-form__title'}>Заполните форму</div>
                <div className={'contact-form__form-wrap'}>
                    <Formsy
                        onValidSubmit={this.submit}
                        onValid={this.enableButton}
                        onInvalid={this.disableButton}
                        onChange={this.onChange}
                    >
                        <Field
                            name="subject"
                            title="Тема"
                            value={draft.subject || ''}
                            validations="minLength:5"
                            validationError="Не менее 5 символов"
                            required
                        />
                        <Field
                            name="name"
                            title="Ваше имя"
                            value={draft.name || ''}
                            validations="minLength:3"
                            validationError="Не менее 3 символов"
                            required
                        />
                        <Field
                            name="phone"
                            title="Телефон"
                            required
                            value={draft.phone || ''}
                            mask="phone"
                            guide={true}
                        />
                        <Row jc="flex-end">
                            <Btn disabled={!this.state.isValid}>Отправить</Btn>
                        </Row>
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
