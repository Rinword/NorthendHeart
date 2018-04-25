import React from 'react';
import cx from 'classnames';
import Tape from './components/tape';
import { Desktop, Mobile } from 'app/uxComponent/Responsive';

import { tech } from 'content';

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

        this.onClean = () => {
            this.setState({ active: -1 });
        };
    }

    render() {
        const tapes = tech.slides;
        return (
            <div id={this.props.id} className={cx('tech', { slide_active: this.props.isActive })}>
                <Desktop>
                    <div className={cx('tech__tapes')} onClick={this.onClean}>
                        {tapes.map((tape, i) => (
                            <Tape
                                key={tape.img}
                                {...tape}
                                showToLeft={i === tapes.length - 1}
                                isActive={i === this.state.active}
                                i={i}
                                onHover={this.onHover}
                                onMouseLeave={this.onClean}
                            />
                        ))}
                    </div>
                    <div
                        onClick={this.onClean}
                        className={cx('tech__bottomText')}
                        dangerouslySetInnerHTML={{ __html: tech.bottomText }}
                    />
                </Desktop>
                <Mobile />
            </div>
        );
    }
}

export default Technologies;
