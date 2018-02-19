import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import { Column, Slider } from '../../../uxComponent/UxBox';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from '../../../../content';

import './style.css';
import '../../../uxComponent/slider/style.css';

import { Desktop, Mobile } from '../../../uxComponent/Responsive';

class Projects extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('projects', { slide_active: this.props.isActive })}>
                <Desktop>
                    <Slider slides={projects} isActive={this.props.isActive} />
                </Desktop>
                <Mobile>
                    <div className="features__title">{this.props.title}</div>
                    <Column cls={cx('projects__mobile-wrap')} height="auto">
                        {projects.map((pr, i) => {
                            return (
                                <Column cls={cx('projects__project')}>
                                    <h3>{pr.title}</h3>
                                    <p>{pr.description}</p>
                                    <Column ai="center">
                                        {pr.photos_mobile.map((img, i) => (
                                            <img className={cx('projects__mobile-img')} src={img} alt="" />
                                        ))}
                                    </Column>
                                </Column>
                            );
                        })}
                    </Column>
                </Mobile>
            </div>
        );
    }
}
export default Projects;
