import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import { Row, Column } from '../../../uxComponent/UxBox';

// import { InfoPanel } from '../../../uxComponent/UxBox';
import { Desktop, Mobile } from '../../../uxComponent/Responsive';
import BackForm from '../home/components/contactForm';
import Manager from './components/manager';
import Footer from './components/footer';

import contacts from '../../../content/contacts';

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
            console.log(this.state.formDraft);
        };

        this.onFormChange = draft => {
            this.setState({ formDraft: draft });
        };
    }

    componentDidMount() {
        const YMaps = window.YMaps;
        const map = new YMaps.Map(this.mapRef);
        map.setCenter(new YMaps.GeoPoint(contacts.office.gpsPoint[0], contacts.office.gpsPoint[1]), 16);

        let placemark = new YMaps.Placemark(
            new YMaps.GeoPoint(contacts.office.gpsPoint[0], contacts.office.gpsPoint[1])
        );

        placemark.name = contacts.office.mapTitle;
        placemark.description = contacts.office.mapDesc;

        map.addControl(new YMaps.TypeControl());
        map.addControl(new YMaps.ToolBar());
        map.addControl(new YMaps.Zoom());
        map.addControl(new YMaps.ScaleLine());

        map.addOverlay(placemark);
    }

    render() {
        return (
            <div id={this.props.id} className={cx('contacts', { slide_active: this.props.isActive })}>
                <Desktop>
                    <div className="contacts__back_1" />
                    {/*<div className="contacts__back_2" />*/}
                    <div className="contacts__title">{this.props.title}</div>
                    <Row className="contacts__content">
                        <Column cls="contacts__back-form-wrap">
                            <BackForm
                                className="contacts__back-form"
                                draft={this.state.formDraft}
                                title={contacts.formTitle}
                                btnAlt={true}
                                onSubmit={this.onFormSubmit}
                                onChange={this.onFormChange}
                            />
                            <Manager contacts={contacts.manager} />
                        </Column>
                        <Column className="contacts__contacts" height="auto" jc="space-between">
                            <Column
                                width="auto"
                                height="inherit"
                                ai="flex-start"
                                cls="contacts__company-data"
                                margin="0 35px 0 0"
                            >
                                <p className="contacts__phone">{contacts.office.phone}</p>
                                <p className="contacts__email">{contacts.office.email}</p>
                                <p className="contacts__address">{contacts.office.address}</p>
                                <Row width="100%" height="400px">
                                    <div id="YMapsID" ref={this.getMapRef} style={{ width: '100%', height: '100%' }} />
                                </Row>
                            </Column>
                        </Column>
                    </Row>
                    <Footer />
                </Desktop>
                <Mobile>
                    <Row width="100%" height="400px">
                        <div id="YMapsID" ref={this.getMapRef} style={{ width: '100%', height: '100%' }} />
                    </Row>
                    <Footer />
                </Mobile>
            </div>
        );
    }
}

export default Contacts;
