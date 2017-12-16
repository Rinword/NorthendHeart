import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Column } from '../../../uxComponent/UxBox';
import cx from 'classnames';
import ReactIntense from '../../../../libs/react-intense/ReactIntense';

import feature1 from '../../../../static/img/feature1.jpg';

import './style.css';

class Features extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('features', { slide_active: this.props.isActive })}>
                <div className="features__background" />
                <Row cls="features__content" jc="space-around" ai="center">
                    <Column height="auto" ai="center" cls="features__show-panel show-panel">
                        <div className="show-panel__title">
                            Конечное число форм - <br /> бесконечное число формобразований
                        </div>
                        <ReactIntense
                            caption="бесконечное число формобразований"
                            className="show-panel__img img_feature"
                            src={feature1}
                            title="Конечное число форм"
                            alt=""
                            thumbnailSrc={feature1}
                            vertical={true}
                        />
                    </Column>
                    <Column height="auto" ai="center" cls="features__show-panel show-panel">
                        <div className="show-panel__title">
                            Всегда можно достроить модуль позже, <br /> когда в нем появится необходимость
                        </div>
                        <ReactIntense
                            className="show-panel__img img_feature"
                            src={feature1}
                            title="Всегда можно достроить модуль позже"
                            alt=""
                            thumbnailSrc={feature1}
                            vertical={true}
                        />
                    </Column>
                </Row>
            </div>
        );
    }
}

export default Features;
