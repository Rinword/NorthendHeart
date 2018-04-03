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

import pr2_0_mobile from './static/img/projects/house2.png';
import pr3_1 from './static/img/projects/3/1.png';
import pr3_2 from './static/img/projects/3/2.png';
import pr3_3 from './static/img/projects/3/3.png';

import pr3_0_mobile from './static/img/projects/house3.jpg';
import pr3_1_mobile from './static/img/projects/3/mobile/1.png';
import pr3_2_mobile from './static/img/projects/3/mobile/2.png';
import pr3_3_mobile from './static/img/projects/3/mobile/3.png';

import pr3_1_mini from './static/img/projects/3/thumbnail/1.png';
import pr3_2_mini from './static/img/projects/3/thumbnail/2.png';
import pr3_3_mini from './static/img/projects/3/thumbnail/3.png';

import pr4_0_mobile from './static/img/projects/house4.png';

import pr5_0_mobile from './static/img/projects/house5.jpg';
import pr5_1 from './static/img/projects/5/1.png';
import pr5_1_mobile from './static/img/projects/5/mobile/1.png';
import pr5_1_mini from './static/img/projects/5/thumbnail/1.png';

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
    subTitle: 'Новые форматы — для жаждущих вдохновения…',
    phone: '+7 (916)652-14-45',
    btnText: 'Заказать звонок',
};

export const features = {
    features: [
        {
            title: 'Модульная архитектура —',
            desc: 'как переосмысление этапности в строительстве',
            img: feature1,
        },
        {
            title: 'Конечное число форм —',
            desc: 'бесконечное число формобразований',
            img: feature2,
        },
    ],
    title: 'Мы придерживаемся концепций, свободных от предрассудков',
    desc: 'Оставайтесь мобильным и гибким — свободным!',
};

export const projects = [
    {
        title: 'Sunset',
        index: 1,
        srcCls: 'projects_img_1',
        description: 'Проект состоит из секций:<br/> #1, #2S, #2M, #3, #5, # терраса, #панель – 3 шт.',
        tabs: [
            {
                title: 'Аккуратный стиль',
                text:
                    'Прошли времена, когда дома годами проектировались и столько же строились. Теперь можно придумать' +
                    ' и получить стильный и современный дом буквально за считанные недели. <p/>' +
                    'Но в отличие от ускоренного «самостроя» Вы получите модный дом в немногословном и элегантном ' +
                    'скандинавском стиле.',
            },
            {
                title: 'Отличная теплоизоляция',
                text:
                    'Согласно системе нормативных документов Российской Федерации (СНиП 23-02-2003 "Тепловая защита' +
                    ' зданий"),  а также Европейскому (Германия) стандарту  (Thermal performance of building. Calculation' +
                    ' of energy use for heating. Residential buildings)  дома PLUSMODUL относятся к классу <span>«В»</span> ' +
                    '<span>(высокий) <br/> энергетической эффективности</span> зданий для условий Московской области.',
            },
            {
                title: 'Высокая модульность',
                text:
                    'Основа успеха – тщательно продуманные деревянные модули, разработанные архитектурно-конструкторским бюро.' +
                    'Для каждой ситуации Вы легко можете собрать необходимую комбинацию модулей и скомпоновать из них идеальный дом,' +
                    ' сделав его любой конфигурации: линенйным, L- и С-образным или даже с внутренним патио. Мы учтём любые Ваши пожелания.',
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
        description:
            'Проект состоит из секций:<br/> #1Х – 2шт., #2MХ, #3Х, #4Х – 2 шт., #5Х, #терраса-балкон, #панель –2 шт. <p/>' +
            'Модули представлены в нескольких вариантах отделки. Вы сами выбираете цвет кровли, тон фасадов, а так же' +
            ' материал внутренней отделки вашего будущего дома.',
        photos: [],
        tabs: [],
        photos_mobile: [pr2_0_mobile],
        photos_mini: [],
    },
    {
        title: 'Icy Tamer',
        index: 3,
        srcCls: 'projects_img_3',
        description: 'Проект состоит из секций:<br/> #1Х, #2SХ, #4Х,  #терраса-балкон, #панель –2 шт.',
        tabs: [
            {
                title: 'Комплектация PREMIUM',
                text: `Основной продукт деятельности компании.
                    В лучших традициях европейского домостроения. 
                    Всё так, как и должно быть! 
                    
                    27 тыс. руб./кв.м. – 2-ух этажные дома под внутреннюю отделку
                    34 тыс. руб./кв.м  - 1-о этажные дома под внутреннюю отделку
                    Фундамент – опционально (на основе геологических изысканий участка)
                    Несущий остов здания из древеснокомпозитного LVL-бруса «ULTRALAM» сечением 51*200 мм (перекрытия, стены, стропильная система) (http://ultralam.com/ru/продукция-ультралам/лвл-брус/)
                    
                    Теплоизоляция 200 мм (перекрытия, наружные стены, стропильная система) минераловатными плитами «ROCKWOOL»  ЛАЙТ БАТС (http://www.rockwool.ru/products/lajt-batts/)
                    
                    Гидроветрозащитная диффузионная мембрана  «DELTA®-VENT N PLUS» производителя Dörken GmbH & Co. KG  - Германия). Импортный продукт. (http://www.doerken.com/ru/products/pitched-roof/delta-vent-n.php)
                    
                    Окна-двери, окна и широкоформатные параллельно сдвижные двери-порталы из массива дерева.  На базе фурнитуры ROTO (Германия) и энергосберегающего аргонового стеклопакета Pilkington (Великобритания). Импортный продукт.
                    
                    Мансардные окна и их комбинации «VELUX» (Дания). Импортный продукт.
                    
                    Фальцевая кровля «Ruukki»  Classic D в покрытиии Pural Matt (Финляндия). Импортный продукт.
                    
                    Фасады – планкен из массива сосны, с шириной ламелей 45 мм. Производственно окрашенный в соответствии с технологией производителя ЛКМ» «TЕKNOS»  (Финляндия). Импортный продукт. (http://www.wood.teknos.ru)
                    
                    Черновая конструкционная  (оболочка жёсткости) интерьерная отделка плитными материалами – фибролитовые плиты «Green Board» ( GB1050 http://g-b-t.ru/product/grinbord-green-board-gb1050)
                    
                    Варианты внутренней отделки и  прайс лист  инженерных коммуникаций – по запросу.

                    `,
            },
        ],
        photos: [pr3_1, pr3_2, pr3_3],
        photos_mobile: [pr3_0_mobile, pr3_1_mobile, pr3_2_mobile, pr3_3_mobile],
        photos_mini: [pr3_1_mini, pr3_2_mini, pr3_3_mini],
    },
    {
        title: 'Silence',
        index: 4,
        srcCls: 'projects_img_4',
        description:
            'Проект состоит из секций:<br/> #1Х – 2шт., #2MХ, #3Х, #4Х – 2 шт., #5Х, #панель –3 шт.<p/>' +
            'Несомненно, нашим клиентам очень приятна та педантичность и скрупулезность, с которой архитекторы и ' +
            'дизайнеры PLUSMODUL  подошли к своему делу.<p/> Вы точно знаете, как будет выглядеть Ваше любое помещение, вплоть' +
            ' до конкретной модели сантехнических приборов. Оцените, как выглядят наши санузлы…\n',
        tabs: [],
        photos: [],
        photos_mobile: [pr4_0_mobile],
        photos_mini: [],
    },
    {
        title: 'Fury',
        index: 5,
        srcCls: 'projects_img_5',
        description:
            'Проект состоит из секций:<br/> #1, #2S, #3,  #терраса, #панель –2 шт. <p/>' +
            'Все дома можно дополнять в будущем, прибавляя новые модули к уже построенным. Другие важные плюсы – хорошая' +
            ' архитектура и качественное фабричное изготовление домов.',
        tabs: [],
        photos: [pr5_1],
        photos_mobile: [pr5_0_mobile, pr5_1_mobile],
        photos_mini: [pr5_1_mini],
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
        address: 'Москва, Автомоторная 5Бс3',
    },
    text1:
        'Если Вы свободны от стереотипных мировоззрений и открыты прогрессу, принимаете новые технологии и за' +
        ' здоровое/сдержанное отношение к имуществу –   предлагаем сделать первый шаг к  знакомству!',
    text2: '',
};
