import React from 'react';
import cx from 'classnames';
import Cookies from 'js-cookie';
import axios from 'axios';

import { Row, Column, Btn, Modal } from 'app/uxComponent/UxBox';
import BackForm from '../home/components/contactForm';
import Footer from './components/footer';
import { Desktop, Mobile } from 'app/uxComponent/Responsive';
import ContactForm from '../home/components/contactForm';
import { contacts } from 'content';

import { ShowPhone } from './components/showPhone';
import banner from 'static/img/banner.png';
import instagramLogo from './instagram-logo.svg';

import './style.css';
import { WhatsappIcon } from 'react-share';


class Contacts extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            formDraft: {},
            isOpen: false,
        };

        this.getMapRef = ref => {
            this.mapRef = ref;
        };

        this.onFormSubmit = () => {
            axios
                .post('api/v1/send-bid', this.state.formDraft)
                .then(res => alert('Заявка успешно отправлена'))
                .catch(err => console.warn(err));
        };

        this.showContactModal = () => {
            this.setState({ contactModalIsOpen: true });
        };

        this.hideContactModal = () => {
            this.setState({ contactModalIsOpen: false });
        };

        this.onFormChange = draft => {
            this.setState({ formDraft: draft });
        };
    }
    goToWhatsApp() {
        window.open('https://wa.me/79998151745', '_blank');
    }

    goToInstagram() {
        window.open('https://www.instagram.com/plusmodul.russia/', '_blank');
    }

    componentDidMount() {
        let oldDraft = Cookies.get('nh-phoneDraft');

        if (oldDraft === 'undefined' || oldDraft === undefined) return;
        this.setState({ formDraft: JSON.parse(oldDraft) });
    }
    //
    // componentDidMount() {
    //     const YMaps = window.YMaps;
    //     const map = new YMaps.Map(this.mapRef);
    //     map.setCenter(new YMaps.GeoPoint(contacts.office.gpsPoint[0], contacts.office.gpsPoint[1]), 16);
    //
    //     let placemark = new YMaps.Placemark(
    //         new YMaps.GeoPoint(contacts.office.gpsPoint[0], contacts.office.gpsPoint[1])
    //     );
    //
    //     placemark.name = contacts.office.mapTitle;
    //     placemark.description = contacts.office.mapDesc;
    //
    //     map.addControl(new YMaps.TypeControl());
    //     map.addControl(new YMaps.ToolBar());
    //     map.addControl(new YMaps.Zoom());
    //     map.addControl(new YMaps.ScaleLine());
    //
    //     map.addOverlay(placemark);
    // }

    render() {
        return (
            <div id={this.props.id} className={cx('contacts', { slide_active: this.props.isActive })}>
                <div className="contacts__back_1" />
                {/*<div className="contacts__back_2" />*/}
                <div className="contacts__title">{this.props.title}</div>
                <Column height="auto" ai="center" overflow="visible" margin="0 0 12px 0">
                    <Row ai="center" jc="center" styles={{ cursor: 'pointer' }} onClick={this.goToWhatsApp}>
                        <WhatsappIcon size={32} round />
                        <p style={{ color: 'white', margin: '0 0 0 12px' }}>WhatsApp</p>
                    </Row>
                    <Row ai="center" jc="center" margin="12px 0 0 0" styles={{ cursor: 'pointer' }} onClick={this.goToInstagram}>
                        <img src={instagramLogo} />
                        <p style={{ color: 'white', margin: '0 0 0 12px' }}>Instagram</p>
                    </Row>
                </Column>
                <Row cls="contacts__content" jc="space-around" overflow="visible">
                    <Desktop>
                        <Row jc="center" cls="contacts__back-form-wrap">
                            <BackForm
                                className="contacts__back-form"
                                draft={this.state.formDraft}
                                title={contacts.formTitle}
                                btnAlt={true}
                                onSubmit={this.onFormSubmit}
                                onChange={this.onFormChange}
                            />
                        </Row>
                    </Desktop>
                    <Column cls="contacts__contacts" height="auto" jc="flex-start" ai="center" overflow="visible">
                        <Column
                            width="auto"
                            height="auto"
                            ai="flex-start"
                            cls="contacts__company-data"
                            overflow="visible"
                        >
                            <ShowPhone phone={contacts.office.phone} />
                            <p className="contacts__email">{contacts.office.email}</p>
                            <p className="contacts__address">{contacts.office.address}</p>
                            {/*<Row width="100%" height="400px">*/}
                            {/*<div id="YMapsID" ref={this.getMapRef} style={{ width: '100%', height: '100%' }} />*/}
                            {/*</Row>*/}
                            <p className="contacts__article">{contacts.text1}</p>
                            <img className="contacts__banner" src={banner} alt="" />
                            {/*{contacts.text2 && <p className="contacts__article">{contacts.text2}</p>}*/}
                        </Column>
                        <Mobile>
                            <Btn alt={true} onClick={this.showContactModal}>
                                {'Заказать звонок'}
                            </Btn>
                        </Mobile>
                    </Column>
                </Row>
                <Footer />
                <Modal
                    isOpen={this.state.contactModalIsOpen}
                    hideCloseBtn={false}
                    onRequestClose={this.hideContactModal}
                >
                    <ContactForm
                        draft={this.state.formDraft}
                        onSubmit={this.onFormSubmit}
                        onChange={this.onFormChange}
                    />
                </Modal>
            </div>
        );
    }
}

export default Contacts;
