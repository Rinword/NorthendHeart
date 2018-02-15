import React from 'react';
import cx from 'classnames';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Column, Btn, Modal } from '../../../uxComponent/UxBox';
import { Desktop, Mobile } from '../../../uxComponent/Responsive';

import RoundMenu from './components/roundMenu';
import ContactForm from './components/contactForm';
import { home, menu } from '../../../../content';

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
            axios
                .post('api/v1/send-bid', draft)
                .then(res => {
                    this.hideContactModal(draft);
                    alert('Заявка успешно отправлена');
                })
                .catch(err => {
                    alert('Ошибка отправки ' + err);
                    this.hideContactModal(draft);
                });
        };
    }

    componentDidMount() {
        let oldDraft = Cookies.get('nh-phoneDraft');

        if (oldDraft === 'undefined' || oldDraft === undefined) return;
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
                <Desktop>
                    <div className="home__background" />
                    <Column cls="home__content">
                        <Column ai="flex-start" cls="home__contact-area">
                            <div className="home__phone"> {home.phone} </div>
                            <Btn alt={true} onClick={this.showContactModal}>
                                {home.btnText}
                            </Btn>
                        </Column>
                        <Column cls="home__tagline-container" flexGrow="0" flex="0 0 auto" width="auto" height="auto">
                            <div className="home__tagline">{home.title}</div>
                            <div className="home__sub-tagline">{home.subTitle}</div>
                        </Column>
                        <Column cls="home__menu-wrap" jc="flex-start" ai="center" overflow="visible">
                            <RoundMenu menuItems={menu} onItemClick={this.props.onMenuClick} />
                        </Column>
                    </Column>

                    <Modal isOpen={this.state.contactModalIsOpen} onRequestClose={this.hideContactModal}>
                        <ContactForm
                            draft={this.state.formDraft}
                            onSubmit={this.onContactFormSubmit}
                            onChange={this.onContactFormChange}
                        />
                    </Modal>
                </Desktop>
                <Mobile>
                    <div className="home__background" />
                    <Column cls="home__content home__content_mobile" overflow="visible">
                        <Column cls="home__tagline-container" flexGrow="0" flex="0 0 auto" width="auto" height="auto">
                            <div className="home__tagline home__tagline_mobile">
                                {home.title}
                            </div>
                            <div className="home__sub-tagline home__sub-tagline_mobile">{home.subTitle}</div>
                        </Column>
                        <Column cls="home__menu-wrap" jc="flex-start" ai="center" overflow="visible">
                            <RoundMenu menuItems={menu} onItemClick={this.props.onMenuClick} />
                        </Column>
                    </Column>

                    <Modal isOpen={this.state.contactModalIsOpen} onRequestClose={this.hideContactModal}>
                        <ContactForm
                            draft={this.state.formDraft}
                            onSubmit={this.onContactFormSubmit}
                            onChange={this.onContactFormChange}
                        />
                    </Modal>
                </Mobile>
            </div>
        );
    }
}

export default Home;
