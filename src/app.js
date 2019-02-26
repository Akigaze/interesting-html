import React, {Component} from "react";

import "./style/app.css";
import Triangle from "./component/Triangle";
import {ToggleButton} from "./component/ToggleButton";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    onToggleSwitch = (toggleState) => {
        console.log(toggleState);
    }

    render(){
        return (
            <div className="app">
                <ToggleButton showState="true" toggleSwitch={this.onToggleSwitch} title="Finished"/>
            </div>
        )
    }
}
