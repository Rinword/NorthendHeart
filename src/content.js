import feature1 from './static/img/feature1.jpg';
import feature2 from './static/img/feature2.jpg';

import pr1_1 from './static/img/projects/1/1.png';
import pr1_2 from './static/img/projects/1/2.png';
import pr1_3 from './static/img/projects/1/3.png';

import pr1_0_mobile from './static/img/projects/house1.jpg';
import pr1_1_mobile from './static/img/projects/1/mobile/1.png';
import pr1_2_mobile from './static/img/projects/1/mobile/2.png';
import pr1_3_mobile from './static/img/projects/1/mobile/3.png';

import pr1_1_mini from './static/img/projects/1/thumbnail/1.png';
import pr1_2_mini from './static/img/projects/1/thumbnail/2.png';
import pr1_3_mini from './static/img/projects/1/thumbnail/3.png';

import pr2_0_mobile from './static/img/projects/house2.jpg';
import pr2_1 from './static/img/projects/2/1.png';
import pr2_2 from './static/img/projects/2/2.png';
import pr2_3 from './static/img/projects/2/3.png';

import pr2_1_mobile from './static/img/projects/2/mobile/1.png';
import pr2_2_mobile from './static/img/projects/2/mobile/2.png';
import pr2_3_mobile from './static/img/projects/2/mobile/3.png';

import pr2_1_mini from './static/img/projects/2/thumbnail/1.png';
import pr2_2_mini from './static/img/projects/2/thumbnail/2.png';
import pr2_3_mini from './static/img/projects/2/thumbnail/3.png';

import pr3_0_mobile from './static/img/projects/house3.jpg';
import pr3_1 from './static/img/projects/3/1.png';
import pr3_1_mobile from './static/img/projects/3/mobile/1.png';
import pr3_1_mini from './static/img/projects/3/thumbnail/1.png';

import lvl from './static/img/tech/lvl.png';
import light from './static/img/tech/light.png';
import roof from './static/img/tech/roof.png';
import msrk from './static/img/tech/msrk.png';

export const menu = [
    {
        order: 0,
        id: 'slide0',
        title: 'Home',
        name: 'home',
    },
    {
        order: 1,
        id: 'slide1',
        title: 'Концепции',
        name: 'features',
    },
    {
        order: 2,
        id: 'slide2',
        title: 'Проекты',
        name: 'projects',
    },
    {
        order: 3,
        id: 'slide3',
        title: 'Технологии',
        name: 'technologies',
        hideOnMobile: true,
    },
    {
        order: 4,
        id: 'slide4',
        title: 'Контакты',
        name: 'contacts',
    },
];

export const home = {
    title: 'Сдержанность и дорогой минимализм — признаки роскоши и стиля',
    subTitle: 'Новые форматы для жаждущих вдохновения…',
    phone: '+7 (916)652-14-45',
    btnText: 'Заказать звонок',
};

export const features = {
    features: [
        {
            title: 'Модульная архитектура',
            desc: 'Всегда можно расширить полезную площадь',
            img: feature1,
        },
        {
            title: 'Конечное число форм —',
            desc: 'бесконечное число формобразований',
            img: feature2,
        },
    ],
    title: 'Мы придерживаемся инетресных концепций',
    desc: 'Поглядите какие штуки мы проворачиваем',
};

export const projects = [
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
        photos_mobile: [pr1_0_mobile, pr1_1_mobile, pr1_2_mobile, pr1_3_mobile],
        photos_mini: [pr1_1_mini, pr1_2_mini, pr1_3_mini],
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
        photos_mobile: [pr2_0_mobile, pr2_1_mobile, pr2_2_mobile, pr2_3_mobile],
        photos_mini: [pr2_1_mini, pr2_2_mini, pr2_3_mini],
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
        photos_mobile: [pr3_0_mobile, pr3_1_mobile],
        photos_mini: [pr3_1_mini],
    },
];

export const tech = {
    bottomText:
        '<p><span>Минимализм</span>, как концепция, всегда строг и жаден к второстепенным, неосоновополагающим элементам.' +
        ' (и тратам на них соответственно)</p> <p>Это естественным образом <span>высвобождает</span> средства на <span>действительное&nbsp;качество</span> в его' +
        ' системообразующих, главных элементах.</p><p> <span>PLUSMODUL</span> сдержан в количестве, но очень щедр в том немногом,' +
        ' вокруг чего и построен.</p>',
    slides: [
        {
            title: 'Конструкционный LVL-брус - педантично выверенная геометрия.',
            description:
                '<span>LVL(ЛВЛ) брус</span> (от англ. Laminated Veneer Lumber)  – <p></p> ' +
                'результат сложного технологического процесса деревообрабатывающей промышленности.' +
                'Стабильные линейные размеры LVL-бруса обеспечивают колосальную точность сопрягаемых деталей.<p></p>' +
                'Конструкции из LVL феноменально долговечны и не теряют своих прочностных показателей через 75, 100 и 125 лет.',
            img: lvl,
        },
        {
            title: 'Ультра-  широкоформатные паралельно-сдвижные оконные двери-портал (Patio).',
            description:
                '<span>Параллельно-сдвижные портальные двери</span>, действительно, поражают. Открывающийся внешний вид, и качество ' +
                'насыщения светом феноменальны! Испытайте эти, по-настоящему, приятные ощущения!',
            img: light,
        },
        {
            title: 'Элегантный и выдержанный профиль правильной скандинавской кровли',
            description: '... ни единого самореза - ни единой капли в доме!',
            img: roof,
        },
        {
            title: 'Современная естественность и натуральность',
            description:
                'Благодаря естественности PLUSMODUL может быть идеальным вариантом для человека любого возраста и' +
                ' состояния души, <span>натуральность</span> улучшает жизнь и ее качество во много раз',
            img: msrk,
        },
    ],
};

export const contacts = {
    formTitle: 'Обратная связь',
    office: {
        email: 'info@plusmodul.com',
        phone: '+7 (499) 350-12-86',
        address: 'Москва, Старопетровский проезд 7а, стр. 6, офис 409',
    },
    text1: 'Тут содержится призыв к действию, чтобы ты оставил контакты и мы засыпали тебя спамом',
    text2:
        'Здесь тоже призыв к действию, но несколько другого толка, если на тебя не подействовал первый. Мы ведь можем спамить и на телефон',
};
