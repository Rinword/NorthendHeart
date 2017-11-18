import React from 'react';
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
            <button className={"ux-btn " + (this.props.cls? this.props.cls : '')} onClick={this.onClick}>
                {this.props.children}
                {this.props.innerIconName && this.renderInnerIcon()}
            </button>
        )
    }
}