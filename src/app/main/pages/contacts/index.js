import React from 'react';
import cx from 'classnames';
import Cookies from 'js-cookie';
import { Row, Column } from '../../../uxComponent/UxBox';

import BackForm from '../home/components/contactForm';
import Footer from './components/footer';
import axios from 'axios';

import { contacts } from '../../../../content';

import './style.css';

class Contacts extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            formDraft: {},
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

        this.onFormChange = draft => {
            this.setState({ formDraft: draft });
        };
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
                <Row cls="contacts__content" jc="space-around">
                    <Row jc="center" cls="contacts__back-form-wrap">
                        <BackForm
                            className="contacts__back-form"
                            draft={this.state.formDraft}
                            title={contacts.formTitle}
                            btnAlt={true}
                            onSubmit={this.onFormSubmit}
                            onChange={this.onFormChange}
                        />
                        {/*<Manager contacts={contacts.manager} />*/}
                    </Row>
                    <Column cls="contacts__contacts" height="auto" jc="flex-start" ai="center">
                        <Column width="auto" height="inherit" ai="flex-start" cls="contacts__company-data">
                            <p className="contacts__phone">{contacts.office.phone}</p>
                            <p className="contacts__email">{contacts.office.email}</p>
                            <p className="contacts__address">{contacts.office.address}</p>
                            {/*<Row width="100%" height="400px">*/}
                            {/*<div id="YMapsID" ref={this.getMapRef} style={{ width: '100%', height: '100%' }} />*/}
                            {/*</Row>*/}
                            <p className="contacts__article">{contacts.text1}</p>
                            {contacts.text2 && <p className="contacts__article">{contacts.text2}</p>}
                        </Column>
                    </Column>
                </Row>
                <Footer />
            </div>
        );
    }
}

export default Contacts;
