import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import { Row, Column, Btn, Modal } from '../../../uxComponent/UxBox';
import menuConfig from '../../../../app/headerMenu/menuConfig';

import RoundMenu from './components/roundMenu';
import ContactForm from './components/contactForm';

import './style.css';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            contactModalIsOpen: false,
            draft: {},
        };

        this.showContactModal = () => {
            this.setState({ contactModalIsOpen: true });
        };

        this.hideContactModal = draft => {
            this.setState({ contactModalIsOpen: false, formDraft: draft });
        };

        this.onContactFormSubmit = draft => {
            console.log(draft);
        };
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

                <Modal
                    isOpen={this.state.contactModalIsOpen}
                    onRequestClose={this.hideContactModal}
                    onFormSubmit={this.onContactFormSubmit}
                >
                    <ContactForm draft={this.state.draft} onSubmit={this.onContactFormSubmit} />
                </Modal>
            </div>
        );
    }
}

export default Home;
