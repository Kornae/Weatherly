import React from "react";
import VerticalSlider from "./Slider";

export default function Box4() {
    return (
        <div id="box4">
            <p id="highlights">Humidity</p>
            <p id="humidity">12 <span id="unit">%</span></p>
            <div id="slider">
                <VerticalSlider />
            </div>
            <p id="dew">Dew Point: 54°</p>
        </div>
    )
}