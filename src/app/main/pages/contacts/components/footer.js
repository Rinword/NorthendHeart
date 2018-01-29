import React from 'react';
import { Row, Column } from '../../../../uxComponent/UxBox';

const Footer = () => (
    <Row flexGrow="0" height="auto" width="calc(100% - 30px)" cls="contacts__footer" margin="15px 30px 0 15px">
        <Row ai="center" cls="contacts__footer-site">
            © PLUSMODUL 2018.
        </Row>

        <Column cls="contacts__author" ai="flex-end" padding="5px 0">
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
                    CC 3.0 BY
                </a>
            </div>
        </Column>
    </Row>
);

export default Footer;
