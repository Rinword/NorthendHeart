import { projects } from '../content';

import Home from './main/pages/home';
import Features from './main/pages/features';
import Projects from './main/pages/projects';
import Lifestyle from './main/pages/technologies';
import Contacts from './main/pages/contacts';

const menu = [
    {
        order: 0,
        id: 'slide0',
        title: 'Home',
        name: 'home',
        component: Home,
    },
    {
        order: 1,
        id: 'slide1',
        title: 'Концепции',
        name: 'features',
        component: Features,
    },
    {
        order: 2,
        id: 'slide2',
        title: 'Проекты',
        name: 'projects',
        data: projects,
        component: Projects,
    },
    {
        order: 3,
        id: 'slide3',
        title: 'Технологии',
        name: 'technologies',
        component: Lifestyle,
    },
    {
        order: 4,
        id: 'slide4',
        title: 'Контакты',
        name: 'contacts',
        component: Contacts,
    },
];

export const getDataByName = name => {
    if (typeof name !== 'string') return {};
    const data = menu.filter(item => item.name === name);
    if (!data.length || !data[0].data) return {};

    return data[0].data;
};

export default menu;
