import React from 'react';
import cx from 'classnames';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { projects } from 'content';
import { Column, Slider, LazyImage } from 'app/uxComponent/UxBox';

import './style.css';
import 'app/uxComponent/slider/style.css';

import { Desktop, Mobile } from 'app/uxComponent/Responsive';

class Projects extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('projects', { slide_active: this.props.isActive })}>
                <Desktop>
                    <Slider slides={projects} isActive={this.props.isActive} legendHidden={false} />
                </Desktop>
                <Mobile>
                    <div className="features__title">{this.props.title}</div>
                    <Column cls={cx('projects__mobile-wrap')} height="auto">
                        {projects.map((pr, i) => <MobileProject key={i} {...pr} />)}
                    </Column>
                </Mobile>
            </div>
        );
    }
}

const MobileProject = ({ title, description, photos_mobile, photos_mini }) => (
    <Column height="auto" cls={cx('projects__project')}>
        <h3>{title}</h3>
        <div className={cx('projects__mobile-desc')} dangerouslySetInnerHTML={{ __html: description }} />
        <Column height="auto" ai="center">
            {photos_mobile.map((img, i) => (
                <LazyImage
                    key={title + i}
                    className={cx('projects__mobile-img')}
                    src={img}
                    thumbnailSrc={photos_mini[i]}
                />
            ))}
        </Column>
    </Column>
);

export default Projects;
