import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import { Row, Column, Btn } from "../../../uxComponent/UxBox";
import menuConfig from '../../../../app/headerMenu/menuConfig';

import RoundMenu from './components/roundMenu';

import './style.css';

class Home extends React.PureComponent {

    render() {
        return (
            <div id={this.props.id} className={cx("home", {'slide_active': this.props.isActive } )}>
                <div className="home__background"/>
                <div className="home__title">Northern Heart</div>
                <Column cls="home__content">
                    <Column ai="flex-start" cls="home__contact-area">
                        <div className="home__phone"> +7 (916)652-14-45 </div>
                        <Btn alt={true}>Заказать звонок</Btn>
                    </Column>
                    <Column flexGrow="0" height="auto" padding="20px 30px">
                        <div className="home__tagline" >Сдержанность и дорогой минимализм — признаки роскоши и стиля</div>
                        <div className="home__sub-tagline" >Начало пути к новому...</div>
                    </Column>
                    <Row cls="home__menu-wrap" jc="center" ai="flex-start" padding="10px 0">
                        <RoundMenu menuItems={menuConfig} onItemClick={this.props.onMenuClick} />
                    </Row>
                </Column>
            </div>
        );
    }
}

export default Home;

const menuItems = [
    {
        id: ''
    }
];