import React from "react";
import VerticalSlider from "./Slider";

export default function Box4(props) {
    return (
        <div id="box4">
            <p id="highlights">Humidity</p>
            <p id="humidity">{props.humidity} <span id="unit">%</span></p>
            <div id="slider">
                <VerticalSlider 
                   humidity={props.humidity}
                />
            </div>
            <p id="dew">Dew Point: {props.dew}°</p>
        </div>
    )
}