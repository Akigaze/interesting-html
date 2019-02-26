import React, {Component} from "react";
import {isFunction} from "lodash";
import "../style/toggle-button-style.css";

export class ToggleButton extends Component{
    constructor(props){
        super(props);
        this.toggleConstant = {
            on: {
                buttonStyle: {backgroundColor: "blue"},
                circleStyle: {transform: "translate(14px,0)"},
                label: "On"
            },
            off: {
                buttonStyle: {backgroundColor: "grey"},
                circleStyle: {transform: "translate(0,0)"},
                label: "Off"
            }
        }

        this.state = {
            off: true
        }
    }

    onToggleSwitch = () => {
        const nextOffState = !this.state.off;
        this.setState({off:nextOffState});
        const {toggleSwitch} = this.props;
        if(isFunction(toggleSwitch)){
            toggleSwitch(nextOffState);
        }
    }

    render(){
        const {off} = this.state;
        const {showState, title} = this.props;
        const toggleConstant = this.toggleConstant;
        // const buttonStyle = off ? {textAlign: "right"} : {textAlign: "left"};
        const {buttonStyle, circleStyle, label} = off ? toggleConstant.off : toggleConstant.on;
        return(
            <div className="toggle-button">
                <span className="title">{title}</span>
                {showState && <span className="state">{label}</span>}
                <span className="button" style={buttonStyle} onClick={this.onToggleSwitch}>
                    <span className="circle" style={circleStyle}/>
                </span>
            </div>
        )
    }
}
