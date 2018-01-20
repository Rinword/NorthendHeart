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
                    <Column cls="contacts__back-form-wrap">
                        <BackForm
                            className="contacts__back-form"
                            draft={this.state.formDraft}
                            title="Обратная связь"
                            btnAlt={true}
                            onSubmit={this.onFormSubmit}
                            onChange={this.onFormChange}
                        />
                        <Row cls="contacts__social-data" ai="center" height="inherit">
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
                    <Column className="contacts__contacts" height="auto" jc="space-between">
                        <Column
                            width="auto"
                            height="inherit"
                            ai="flex-start"
                            cls="contacts__company-data"
                            margin="0 35px 0 0"
                        >
                            <p className="contacts__phone">+ 7 (495) 771-12-12</p>
                            <p className="contacts__email">plusmodul@support.ru</p>
                            <p className="contacts__address">Москва, Симоновский Вал 15, офис 416</p>
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
