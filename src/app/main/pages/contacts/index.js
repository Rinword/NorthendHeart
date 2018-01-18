import React from 'react';
// import PropTypes from 'prop-types';
import { InfoPanel } from '../../../uxComponent/UxBox';
import vk from '../../../../static/icons/social/vk.svg';
import youtube from '../../../../static/icons/social/youtube.svg';
import cx from 'classnames';

import './style.css';

class Contacts extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('life-style', { slide_active: this.props.isActive })}>
                <div className="life-style__social">
                    <InfoPanel title="Группа ВК" subTitle="перейти >" img={vk} />
                    <InfoPanel title="Канал Youtube" subTitle="перейти >" img={youtube} />
                </div>
            </div>
        );
    }
}

export default Contacts;
