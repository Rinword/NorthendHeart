import React from 'react';
import { Row, Column } from '../../../../uxComponent/UxBox';

const Footer = () => (
    <Row
        flexGrow="0"
        height="auto"
        ai="center"
        width="calc(100%)"
        cls="contacts__footer"
        margin="15px 0 0 0"
        padding="5px 10px 0"
    >
        <Row ai="center" cls="contacts__footer-site">
            © PLUSMODUL 2018.
        </Row>

        <Column cls="contacts__author" jc="center" ai="flex-end" padding="5px 0">
            <p>Made by Rinword</p>
            <div>
                Есть вопросы по сайту? Пишите на <span>rinwordweb@gmail.com</span>
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
                    {' '}
                    CC 3.0 BY
                </a>
            </div>
        </Column>
    </Row>
);

export default Footer;
