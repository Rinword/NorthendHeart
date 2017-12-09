import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { toDecart } from './utils';
import './style.css';

class RoundMenu extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hoveredItem: -1,
            mainRadius: 0,
            itemAngle: +(360 / props.menuItems.length).toFixed(0),
            containerSize: 0,
            fade: 'none',
            shadow: 'none',
            animation: true,
        };

        // const clearTimeouts = (tIds) => {
        //     if(Array.isArray(tIds)) {
        //         tIds.forEach( id => id && clearTimeout(id))
        //     }
        //
        //     return null;
        // };

        this.onHover = order => {
            const duration = this.props.fadeDuration;
            this.setState({ animation: false });
            if (order === this.state.hoveredItem) return;
            // clearTimeouts([tId, tId2]);

            this.setState({ fade: 'fade_in' });
            setTimeout(() => {
                // if(this.state.fade === 'fade_in') {
                this.setState({ hoveredItem: order, fade: 'fade_out' });
                // }
                setTimeout(() => {
                    // this.setState({fade: 'fade_out'});
                    // tId3 = setTimeout(()=> {
                    this.setState({ fade: 'none' });
                    // }, duration)
                }, duration);
            }, duration);
            // var tId, tId2;
        };

        this.onBlur = () => {
            this.setState({ animation: true });
        };
    }

    componentDidMount() {
        const containerSize = Math.min(this.refs.content.clientHeight, this.refs.content.clientWidth);
        let radius = containerSize / 2 - this.props.padding;
        if (radius <= 0) radius = 50;
        this.setState({
            mainRadius: radius,
        });
    }

    render() {
        const currItem = this.state.hoveredItem;
        const menuItems = this.props.menuItems;
        const angle = this.state.itemAngle;

        return (
            <div
                ref="content"
                className={cx('ux-round-menu', { [`ux-round-menu_stop-animation`]: !this.state.animation })}
            >
                <div
                    className={cx(
                        'ux-round-menu__center',
                        `ux-round-menu__center_${this.state.fade}`,
                        `ux-round-menu__center_${this.state.shadow}`,
                        { [`ux-round-menu__center_stop-animation`]: !this.state.animation }
                    )}
                >
                    <div className="text-out" style={{ transition: `${this.props.fadeDuration / 1000}s all` }}>
                        {(menuItems[currItem] && menuItems[currItem].title) || ''}
                    </div>
                </div>
                {this.props.menuItems.map((item, i) => {
                    return (
                        <MenuItem
                            onHover={this.onHover}
                            onBlur={this.onBlur}
                            onClick={this.props.onItemClick}
                            key={i + angle}
                            r={this.state.mainRadius}
                            fi={angle}
                            order={i}
                            data={item}
                            animation={this.state.animation}
                            itemsFade={this.props.itemsFade}
                            fadeDuration={this.props.fadeDuration}
                        />
                    );
                })}
            </div>
        );
    }
}

const MenuItem = ({ r, order, fi, data, onHover, onBlur, onClick, animation, itemsFade, fadeDuration }) => {
    let crs = toDecart(r, order * fi);

    crs.x += r;
    crs.y += r;
    return (
        <div
            className={cx(
                'ux-round-menu__item',
                { 'ux-round-menu__item_stop-animation': !animation },
                { [`ux-round-menu__item_show-at_stop-animation`]: !itemsFade }
            )}
            style={{
                left: crs.x || 'calc(50% - 50px)',
                top: crs.y || 'calc(50% - 50px)',
                transition: `${fadeDuration / 1000}s all`,
                transitionDelay: `${0.1 * order + 0.2}s`,
            }}
            onMouseEnter={() => onHover(order)}
            onMouseLeave={() => onBlur(order)}
            onClick={() => onClick(data.id)}
        >
            <div className={cx(`icon icon_size_48 icon_bg-size_contain icon_menu_${data.name}`)} />
        </div>
    );
};

RoundMenu.displayName = 'RoundMenu';

RoundMenu.propTypes = {
    menuItems: PropTypes.array.isRequired,
    padding: PropTypes.number,
    fadeDuration: PropTypes.number,
    itemsFade: PropTypes.bool,
};

RoundMenu.defaultProps = {
    padding: 50,
    fadeDuration: 200,
    itemsFade: true,
};

export default RoundMenu;
