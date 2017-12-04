import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Column, Btn } from "../../../../../uxComponent/UxBox";
import {toDecart} from "./utils";
import './style.css';

class RoundMenu extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            hoveredItem: 0,
            mainRadius: 0,
            itemAngle: +((360/props.menuItems.length).toFixed(0)),
            containerSize: 0,
            fade: 'none',
            shadow: 'none',
        };

        const clearTimeouts = (tIds) => {
            if(Array.isArray(tIds)) {
                tIds.forEach( id => id && clearTimeout(id))
            }

            return null;
        }

        this.onHover = (order) => {
            const duration = this.props.fadeDuration;
            if(order === this.state.hoveredItem) return;
            clearTimeouts([tId]);

            this.setState({ fade: 'fade_in' });
            tId = setTimeout(()=> {
                this.setState({ hoveredItem: order, fade: 'fade_out', shadow: 'shadow'});
                tId2 = setTimeout(()=> {
                    this.setState({fade: 'fade_out'});
                    tId3 = setTimeout(()=> {
                        this.setState({fade: 'none'});
                        tId4 = setTimeout(()=> {
                            this.setState({shadow: 'none'});
                        }, 2*duration)
                    }, duration)
                }, duration)
            }, duration);
            var tId, tId2,tId3, tId4;
        }
    }

    componentDidMount() {
        const containerSize = Math.min(this.refs.content.clientHeight, this.refs.content.clientWidth);
        let radius = containerSize/2 - this.props.padding;
        if(radius <= 0) radius = 50;
        this.setState({
            mainRadius: radius,
        });
    }

    render() {
        const currItem = this.state.hoveredItem;
        const menuItems = this.props.menuItems;
        const angle = this.state.itemAngle;

        return (
            <div ref="content" className={cx("ux-round-menu")}>
                <div
                    className={cx(
                        "ux-round-menu__center",
                        `ux-round-menu__center_${this.state.fade}`,
                        `ux-round-menu__center_${this.state.shadow}`
                    )}
                >
                    <div className="text-out" style={{transition: `${this.props.fadeDuration/1000}s all`}}>
                        {menuItems[currItem].name}
                    </div>
                </div>
                {this.props.menuItems.map( (item, i) => {
                    return (
                        <MenuItem onHover={this.onHover} key={angle} r={this.state.mainRadius} fi={angle} order={i} data={item} />
                    )
                })}
            </div>
        );
    }
}

const MenuItem = ({r, order, fi, data, onHover}) => {
    let crs = toDecart(r, order * fi);

    crs.x += r + 10;
    crs.y += r + 10;
    return (
            <div
                className="ux-round-menu__item"
                style={{left: crs.x, top: crs.y}}
                onMouseEnter={()=>onHover(order)}
            >
                {data.name.charAt(0)}
            </div>
        )
};

RoundMenu.displayName = 'RoundMenu';

RoundMenu.propTypes = {
    menuItems: PropTypes.array.isRequired,
    padding: PropTypes.number,
    fadeDuration: PropTypes.number,

};

RoundMenu.defaultProps = {
    padding: 50,
    fadeDuration: 200,
}

export default RoundMenu;