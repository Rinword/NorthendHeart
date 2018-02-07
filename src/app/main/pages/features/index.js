import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Column } from '../../../uxComponent/UxBox';
import cx from 'classnames';
import ReactIntense from '../../../../libs/react-intense/ReactIntense';
import { Desktop, Mobile } from '../../../uxComponent/Responsive';
import features from '../../../content/features';

import './style.css';

class Features extends React.PureComponent {
    render() {
        return (
            <Desktop>
                <div id={this.props.id} className={cx('features', { slide_active: this.props.isActive })}>
                    <div className="features__background" />
                    <div className="features__title">{this.props.title}</div>
                    <Row cls="features__content" jc="space-around" width="auto" ai="center" padding="0 50px">
                        {features.map(feature => (
                            <Column key={feature.title} height="auto" ai="center" cls="features__show-panel show-panel">
                                <div className="show-panel__img-wrap">
                                    <ReactIntense
                                        caption={feature.desc}
                                        title={feature.title}
                                        className="show-panel__img img_feature"
                                        src={feature.img}
                                        alt=""
                                        thumbnailSrc={feature.img}
                                        vertical={true}
                                    />
                                </div>
                                <div className="show-panel__legend">
                                    <div className="show-panel__title">{feature.title}</div>
                                    <div className="show-panel__desc">{feature.desc}</div>
                                </div>
                            </Column>
                        ))}
                    </Row>
                </div>
            </Desktop>
        );
    }
}

export default Features;
