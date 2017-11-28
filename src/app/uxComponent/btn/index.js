import React from 'react';
import cx from 'classnames';
import './style.css';
export default class Btn extends React.Component {

    constructor(props){
        super(props);

        this.onClick = () => {
            this.props.onClick && this.props.onClick();
        }
    }

    renderInnerIcon() {
        return(
            <div className={'ux-btn__inner-icon icon icon_'+ this.props.innerIconName}>

            </div>
        )
    }

    render(){
        return (
            <button className= {cx("ux-btn" + (this.props.cls? this.props.cls : ''), {'ux-btn_alt' : this.props.alt})} onClick={this.onClick}>
                {this.props.children}
                {this.props.innerIconName && this.renderInnerIcon()}
            </button>
        )
    }
}