import React, { useState } from 'react';
import ReactGA from 'react-ga';

import { Btn, Row } from 'app/uxComponent/UxBox';

const callConversion = () => {
    const ga = ReactGA.ga();
    ga('send', 'event', 'interaction', 'click', 'shownPhone');
    window.fbq && window.fbq('track', 'Contact');

    window.yaCounter47731816 && window.yaCounter47731816.reachGoal('ClickShowPhone');
};

function ShowPhone({ phone }) {
    const [isShown, setIsShown] = useState(false);

    if (!isShown) {
        return (
            <Row ai="center" cls="contacts__phone-containter">
                <Btn
                    alt={true}
                    onClick={() => {
                        callConversion();
                        setIsShown(!isShown);
                    }}
                >
                    Показать номер телефона
                </Btn>
            </Row>
        );
    }

    return <p className="contacts__phone">{phone}</p>;
}

export { ShowPhone };
