import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import { Row, Column } from '../../../uxComponent/UxBox';

import { InfoPanel } from '../../../uxComponent/UxBox';

import youtube from '../../../../static/icons/social/youtube.svg';

import './style.css';

class Contacts extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('contacts', { slide_active: this.props.isActive })}>
                <div className="contacts__title">Контакты</div>
                <Row className="contacts__content">
                    <Row className="contacts__back-form">
                        <div>form</div>
                    </Row>
                    <Column className="contacts__contacts" jc="space-between">
                        <Column classNme="contacts__company-data">phone, adress</Column>
                        <Row classNme="contacts__social-data">
                            <InfoPanel img={youtube} title="Канал Youtube" subTitle="перейти >" />
                        </Row>
                    </Column>
                </Row>
                <div className="contacts__footer">footer</div>
            </div>
        );
    }
}

export default Contacts;
