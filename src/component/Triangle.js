import React, {Component} from "react";

export default class Triangle extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="triangle-container">
                <div className="four-triangle"/>
                <div className="top-triangle"/>
                <div className="bottom-triangle"/>
                <div className="left-triangle"/>
                <div className="right-triangle"/>
                <div className="left-top-triangle"/>
                <div className="left-bottom-triangle"/>
                <div className="right-top-triangle"/>
                <div className="right-bottom-triangle"/>
                <div className="equilateral-triangle"/>
            </div>
        )
    }
}