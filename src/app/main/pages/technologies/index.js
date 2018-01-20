import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import Tape from './components/tape';

import tapes from '../../../content/tech';

import './style.css';

class Technologies extends React.PureComponent {
    render() {
        return (
            <div id={this.props.id} className={cx('tech', { slide_active: this.props.isActive })}>
                {tapes.map(tape => <Tape key={tape.img} {...tape} width={100 / tapes.length} />)}
            </div>
        );
    }
}

export default Technologies;
