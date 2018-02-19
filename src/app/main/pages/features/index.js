import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Column } from '../../../uxComponent/UxBox';
import cx from 'classnames';
import ReactIntense from '../../../../libs/react-intense/ReactIntense';
import { Desktop, Mobile } from '../../../uxComponent/Responsive';
import { features } from '../../../../content';

import './style.css';

class Features extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('features', { slide_active: this.props.isActive })}>
                <Desktop>
                    <div className="features__background" />
                    <div className="features__title">{this.props.title}</div>
                    <Column cls="features__tagline-container" flexGrow="0" flex="0 0 auto" width="auto" height="auto">
                        <div className="features__tagline">{features.title}</div>
                        <div className="features__sub-tagline">{features.desc}</div>
                        <Column />
                    </Column>
                    <Row
                        cls="features__content"
                        jc="space-around"
                        ai="flex-start"
                        width="auto"
                        height="auto"
                        padding="20px 40px"
                    >
                        {features.features.map(feature => (
                            <Column
                                key={feature.title}
                                width="auto"
                                height="auto"
                                ai="center"
                                cls="features__show-panel show-panel"
                            >
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
                </Desktop>
                <Mobile>
                    <div className="features__background_mobile" />
                    {/*<div className="features__title">{this.props.title}</div>*/}
                    <Column
                        cls="features__tagline-container"
                        ai="center"
                        flexGrow="0"
                        flex="0 0 auto"
                        width="auto"
                        height="auto"
                        padding="10px"
                    >
                        <div className={cx('features__tagline', 'ta_center')}>{features.title}</div>
                        <div className={cx('features__sub-tagline', 'ta_center')}>{features.desc}</div>
                        <Column />
                    </Column>
                    <Row
                        cls="features__content"
                        jc="space-around"
                        ai="flex-start"
                        width="auto"
                        height="auto"
                        padding="20px 40px"
                    >
                        {features.features.map(feature => (
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
                </Mobile>
            </div>
        );
    }
}

export default Features;
