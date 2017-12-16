import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import Cookies from 'js-cookie';
import { Row, Column, Btn, Modal } from '../../../uxComponent/UxBox';
import menuConfig from '../../../../app/headerMenu/menuConfig';

import RoundMenu from './components/roundMenu';
import ContactForm from './components/contactForm';

import './style.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contactModalIsOpen: false,
            formDraft: {},
        };

        this.showContactModal = () => {
            this.setState({ contactModalIsOpen: true });
        };

        this.hideContactModal = () => {
            this.setState({ contactModalIsOpen: false });
            Cookies.set('nh-phoneDraft', JSON.stringify(this.state.formDraft), { expires: 7 });
        };

        this.onContactFormHide = draft => {
            this.hideContactModal(draft);
        };

        this.onContactFormChange = draft => {
            this.setState({ formDraft: draft });
        };

        this.onContactFormSubmit = draft => {
            this.hideContactModal(draft);
            //fetch data to server
        };
    }

    componentDidMount() {
        let oldDraft = Cookies.get('nh-phoneDraft');
        if (oldDraft === 'undefined') return;
        this.setState({ formDraft: JSON.parse(oldDraft) });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (JSON.stringify(nextState.formDraft) !== JSON.stringify(this.state.formDraft)) {
            return false; //cut excess renders when change form only
        }

        return true;
    }

    render() {
        return (
            <div id={this.props.id} className={cx('home', { slide_active: this.props.isActive })}>
                <div className="home__background" />
                <Column cls="home__content">
                    <Column ai="flex-start" cls="home__contact-area">
                        <div className="home__phone"> +7 (916)652-14-45 </div>
                        <Btn alt={true} onClick={this.showContactModal}>
                            Заказать звонок
                        </Btn>
                    </Column>
                    <Column flexGrow="0" height="auto" padding="30px 10px 20px 85px">
                        <div className="home__tagline">
                            Сдержанность и дорогой минимализм — признаки роскоши и стиля
                        </div>
                        <div className="home__sub-tagline">Начало пути к новому...</div>
                    </Column>
                    <Row cls="home__menu-wrap" jc="center" ai="flex-start" padding="10px 0">
                        <RoundMenu menuItems={menuConfig} onItemClick={this.props.onMenuClick} />
                    </Row>
                </Column>

                <Modal isOpen={this.state.contactModalIsOpen} onRequestClose={this.hideContactModal}>
                    <ContactForm
                        draft={this.state.formDraft}
                        onSubmit={this.onContactFormSubmit}
                        onChange={this.onContactFormChange}
                    />
                </Modal>
            </div>
        );
    }
}

export default Home;
