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
            active: 0,
        };

        this.onHover = id => {
            this.setState({ active: id });
        };
    }

    render() {
        return (
            <div id={this.props.id} className={cx('tech', { slide_active: this.props.isActive })}>
                <Desktop>
                    {tech.map((tape, i) => (
                        <Tape
                            key={tape.img}
                            {...tape}
                            width={100 / tech.length}
                            showToLeft={i === tech.length - 1}
                            showDesc={i === this.state.active}
                            i={i}
                            onHover={this.onHover}
                        />
                    ))}
                </Desktop>
                <Mobile />
            </div>
        );
    }
}

export default Technologies;
