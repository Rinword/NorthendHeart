import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import { Row, Column } from '../../../uxComponent/UxBox';

import { InfoPanel } from '../../../uxComponent/UxBox';
import BackForm from '../home/components/contactForm';

import manager from '../../../../static/img/manager.png';

import './style.css';

class Contacts extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            formDraft: {},
        };

        this.onFormSubmit = () => {
            console.log(this.state.formDraft);
        };

        this.onFormChange = draft => {
            this.setState({ formDraft: draft });
        };
    }

    render() {
        return (
            <div id={this.props.id} className={cx('contacts', { slide_active: this.props.isActive })}>
                <div className="contacts__title">Контакты</div>
                <Row className="contacts__content">
                    <Row cls="contacts__back-form-wrap">
                        <BackForm
                            className="contacts__back-form"
                            draft={this.state.formDraft}
                            title="Обратная связь"
                            btnAlt={true}
                            onSubmit={this.onFormSubmit}
                            onChange={this.onFormChange}
                        />
                    </Row>
                    <Column className="contacts__contacts" jc="space-between">
                        <Column
                            width="auto"
                            height="auto"
                            ai="flex-start"
                            cls="contacts__company-data"
                            margin="0 35px 0 0"
                        >
                            <p className="contacts__phone">+ 7 (495) 771-12-12</p>
                            <p className="contacts__email">plusmodul@support.ru</p>
                            <p className="contacts__address">Москва, Симоновский Вал 15, офис 416</p>
                        </Column>
                        <Row cls="contacts__social-data" ai="center" height="auto">
                            <InfoPanel img={manager} title="Чистов Павел" subTitle="инженер-конструктор">
                                <Column cls="contacts__info-desc">
                                    <Row cls="contacts__info-section" ai="center" margin="5px 0">
                                        <p>pchistov@plusmodul.ru</p>
                                    </Row>
                                    <Row cls="contacts__info-section" ai="center" margin="5px 0">
                                        <p>+7 (926) 616 48-96</p>
                                        <Row width="auto" flexGrow="0" margin="0 15px">
                                            <div className="icon icon_size_24 icon_bg-size_contain icon_social_telegram" />
                                            <div className="icon icon_size_24 icon_bg-size_contain icon_social_whatsapp" />
                                        </Row>
                                    </Row>
                                </Column>
                            </InfoPanel>
                        </Row>
                    </Column>
                </Row>
                <Row
                    flexGrow="0"
                    height="auto"
                    width="calc(100% - 30px)"
                    cls="contacts__footer"
                    margin="15px 30px 0 15px"
                >
                    footer
                </Row>
            </div>
        );
    }
}

export default Contacts;
