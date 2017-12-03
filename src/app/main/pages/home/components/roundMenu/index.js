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
        };

        this.onHover = (order) => {
            this.setState({ hoveredItem: order });
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
                <div className="ux-round-menu__center">
                    <div>{menuItems[currItem].name}</div>
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

    crs.x += r + 25;
    crs.y += r + 25;
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
};

RoundMenu.defaultProps = {
    padding: 50,
}

export default RoundMenu;