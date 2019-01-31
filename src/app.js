import React, {Component} from "react";

import "./style/app.css";
import Triangle from "./component/Triangle";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <h1>Triangle</h1>
                <Triangle />
            </div>
        )
    }
}
