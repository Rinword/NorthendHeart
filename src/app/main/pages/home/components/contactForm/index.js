import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Formsy from 'formsy-react';
import ReactGA from 'react-ga';
import { Row, Column, Btn, Field } from '../../../../../uxComponent/UxBox';

import './style.css';

class ContactForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isValid: false,
        };

        // const ga = ReactGA.ga();

        this.submit = data => {
            ReactGA.event({
                category: 'request',
                action: 'click',
                label: 'feedback',
            });

            // ga('send', 'event', 'request', 'click', 'feedback');
            window.gtag_report_conversion && window.gtag_report_conversion();
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
            <Column width="auto" cls={cx('home__contact-form contact-form', this.props.className)}>
                <div className={'contact-form__title'}>{this.props.title}</div>
                <div className={'contact-form__form-wrap'}>
                    <Formsy
                        onValidSubmit={this.submit}
                        onValid={this.enableButton}
                        onInvalid={this.disableButton}
                        onChange={this.onChange}
                    >
                        <Field
                            name="name"
                            title="Ваше имя"
                            value={draft.name || ''}
                            validations="minLength:3"
                            validationError="Не менее 3 символов"
                            required
                        />
                        <Field
                            name="email"
                            title="E-mail"
                            value={draft.email || ''}
                            validations="isEmail"
                            validationError="Некорректный e-mail"
                            required
                        />
                        <Field
                            name="phone"
                            title="Телефон"
                            required
                            value={draft.phone || ''}
                            mask="phone"
                            guide={true}
                            validations={{ minDigitsLength: 11 }}
                            validationError="Некорректный номер"
                        />
                        <Field
                            name="date"
                            title="Удобное время"
                            value={draft.date || 'будни с 10 до 23'}
                            placeholder="будни с 10 до 23"
                            validations="maxLength:25"
                            validationError="Не более 25 символов"
                        />
                        <Row jc="flex-end">
                            <Btn alt={this.props.btnAlt} disabled={!this.state.isValid}>
                                Отправить
                            </Btn>
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
    onChange: PropTypes.func.isRequired,
    draft: PropTypes.object,
    className: PropTypes.string,
    title: PropTypes.string,
    btnAlt: PropTypes.bool,
};

ContactForm.defaultProps = {
    draft: {},
    className: '',
    title: 'Заполните форму',
    btnAlt: false,
};

export default ContactForm;
