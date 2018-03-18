import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import Tape from './components/tape';
import { Desktop, Mobile } from '../../../uxComponent/Responsive';

import { tech } from '../../../../content';

import './style.css';

class Technologies extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            active: -1,
        };

        this.onHover = id => {
            this.setState({ active: id });
        };
    }

    render() {
        const tapes = tech.slides;
        return (
            <div id={this.props.id} className={cx('tech', { slide_active: this.props.isActive })}>
                <Desktop>
                    <div className={cx('tech__tapes')}>
                        {tapes.map((tape, i) => (
                            <Tape
                                key={tape.img}
                                {...tape}
                                width={100 / tapes.length}
                                showToLeft={i === tapes.length - 1}
                                isActive={i === this.state.active}
                                i={i}
                                onHover={this.onHover}
                            />
                        ))}
                    </div>
                    <div className={cx('tech__bottomText')} dangerouslySetInnerHTML={{ __html: tech.bottomText }} />
                </Desktop>
                <Mobile />
            </div>
        );
    }
}

export default Technologies;
