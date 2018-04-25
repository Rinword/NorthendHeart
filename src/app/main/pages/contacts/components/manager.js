import React from 'react';
import PropTypes from 'prop-types';

import { Row, Column, InfoPanel } from 'app/uxComponent/UxBox';

import '../style.css';

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
        const contacts = this.props.contacts;
        return (
            <Row cls="contacts__social-data" ai="center" height="inherit">
                <InfoPanel img={contacts.img} title={contacts.name} subTitle={contacts.role}>
                    <Column cls="contacts__info-desc">
                        <Row cls="contacts__info-section" ai="center" margin="5px 0">
                            <p>{contacts.email}</p>
                        </Row>
                        <Row cls="contacts__info-section" ai="center" margin="5px 0">
                            <p>{contacts.phone}</p>
                            <Row width="auto" flexGrow="0" margin="0 15px">
                                <div className="icon icon_size_24 icon_bg-size_contain icon_social_telegram" />
                                <div className="icon icon_size_24 icon_bg-size_contain icon_social_whatsapp" />
                            </Row>
                        </Row>
                    </Column>
                </InfoPanel>
            </Row>
        );
    }
}

ContactForm.displayName = 'ContactForm';

ContactForm.propTypes = {
    contacts: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default ContactForm;
