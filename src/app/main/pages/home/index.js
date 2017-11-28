import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import { Column, Btn } from "../../../uxComponent/UxBox";

import './style.css';

class Home extends React.PureComponent {

    render() {
        return (
            <div id={this.props.id} className={cx("home", {'slide_active': this.props.isActive } )}>
                <div className="home__background"/>
                <div className="home__content">
                    <div className="home__title">Northern Heart</div>
                    <Column ai="flex-start" cls="home__contact-area">
                        <div className="home__phone"> +7 (916)652-14-45 </div>
                        <Btn alt={true}>Заказать звонок</Btn>
                    </Column>

                    <div className="home__tagline" >Сдержанность и дорогой минимализм — признаки роскоши и стиля</div>
                    <div className="home__sub-tagline" >Начало пути к новому...</div>
                </div>
            </div>
        );
    }
}

export default Home;