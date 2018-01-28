import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import { Row, Column } from '../../../uxComponent/UxBox';

import { InfoPanel } from '../../../uxComponent/UxBox';
import BackForm from '../home/components/contactForm';
import Manager from './components/manager';

import contacts from '../../../content/contacts';

import Responsive from 'react-responsive';

import './style.css';

const Desktop = props => <Responsive {...props} minWidth={798} minHeight={760} />;
const SmallDesktop = props => <Responsive {...props} minWidth={798} />;
const Mobile = props => <Responsive {...props} maxWidth={797} />;

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
                <div className="contacts__back_1" />
                <div className="contacts__back_2" />
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
                    </Column>
                    <Manager contacts={contacts.manager} />
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
                            <Row width="100%" height="470px">
                                <div id="YMapsID" ref={this.getMapRef} style={{ width: '100%', height: '100%' }} />
                            </Row>
                        </Column>
                    </Column>
                </Row>
                <Row
                    flexGrow="0"
                    height="auto"
                    width="calc(100% - 30px)"
                    cls="contacts__footer"
                    margin="15px 30px 0 15px"
                >
                    <Row ai="center" cls="contacts__footer-site">
                        © PLUSMODUL 2018.
                    </Row>

                    <Column cls="contacts__author" ai="flex-end" padding="5px 0">
                        <p>Made by Rinword</p>
                        <div>
                            Есть вопросы по сайту? Пишите на <span>ilyabelenko@mail.ru</span>
                        </div>
                        <div className="icons-legal">
                            Icons made by{' '}
                            <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
                                Smashicons,
                            </a>{' '}
                            <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">
                                Pixel perfect,
                            </a>{' '}
                            <a href="http://www.freepik.com" title="Freepik">
                                Freepik,
                            </a>{' '}
                            from{' '}
                            <a href="https://www.flaticon.com/" title="Flaticon">
                                www.flaticon.com
                            </a>{' '}
                            is licensed by
                            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">
                                CC 3.0 BY
                            </a>
                        </div>
                    </Column>
                </Row>
            </div>
        );
    }
}

export default Contacts;
