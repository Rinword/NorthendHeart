import pr1_1 from '../../static/img/projects/1/1.png';
import pr1_2 from '../../static/img/projects/1/2.png';
import pr1_3 from '../../static/img/projects/1/3.png';

import pr2_1 from '../../static/img/projects/2/1.png';
import pr2_2 from '../../static/img/projects/2/2.png';
import pr2_3 from '../../static/img/projects/2/3.png';

import pr3_1 from '../../static/img/projects/3/1.png';

export default [
    {
        title: 'Grow Seek',
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
        photos: [pr1_1, pr1_2, pr1_3],
    },
    {
        title: 'Lone Pine',
        index: 2,
        srcCls: 'projects_img_2',
        description: 'Просторный двухэтажный дом с развитым вторым этажом',
        tabs: [
            {
                title: 'Аккуратный стиль',
                text: 'Все очень зачетно',
            },
            {
                title: 'Развитая крыша',
                text: 'Причудливая, почти футуристичного вида крыша с изогнутыми окнами-транформерами',
            },
            {
                title: 'Придомовой бассейн',
                text: 'П-образная планировка дом содержит внутри себя уютный бассейн',
            },
        ],
        photos: [pr2_1, pr2_2, pr2_3],
    },
    {
        title: 'Fresh Breath',
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
        photos: [pr3_1],
    },
];