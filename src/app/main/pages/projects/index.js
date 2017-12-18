import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import { Slider } from '../../../uxComponent/UxBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './style.css';
import '../../../uxComponent/slider/style.css';

// import house1 from '../../../../static/img/projects/house1.jpg';
// import house2 from '../../../../static/img/projects/house2.jpg';
// import house3 from '../../../../static/img/projects/house3.jpg';

class Projects extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('projects', { slide_active: this.props.isActive })}>
                <Slider slides={slides} />
            </div>
        );
    }
}

export default Projects;

const slides = [
    {
        title: 'GrowSeek',
        index: 1,
        srcCls: 'projects_img_1',
        description: 'Отличный загородный домик для небольшой семьи',
        tabs: [
            {
                title: 'Аккуратный стиль',
                text: 'Все очень зачетно',
            },
            {
                title: 'Отличная теплоизоляция',
                text: 'Минимальные потери тепла',
            },
            {
                title: 'Высокая модульность',
                text: 'Выберите компоновку дома по своему вкусу. Мы учтем любые Ваши пожелания',
            },
        ],
    },
    {
        title: 'LonePine',
        index: 2,
        srcCls: 'projects_img_2',
        description: 'Просторный двухэтажный дом с развитым вторым этажом',
        tabs: [
            {
                title: 'Аккуратный стиль',
                text: 'Все очень зачетно',
            },
            {
                title: 'Многополигональная крыша',
                text: 'Причудливая, почти футуристичного вида крыша с изогнутыми окнами-транформерами',
            },
            {
                title: 'Придомовой бассейн',
                text: 'П-образная планировка дом содержит внутри себя уютный бассейн',
            },
        ],
    },
    {
        title: 'FreshBreath',
        index: 3,
        srcCls: 'projects_img_3',
        description: 'Отличный загородный домик для небольшой семьи',
        tabs: [
            {
                title: 'Строгий и стильный',
                text: 'Ровные, правильные и фукнциональные очертания, но ни разу не скучные',
            },
            {
                title: 'Отличная теплоизоляция',
                text: 'Минимальные потери тепла',
            },
        ],
    },
];
