import React from "react";
import Divider from '@mui/joy/Divider';


export default function Box2() {
    return (
        <div id="box2">
            <p id="highlights">Wind Status</p>
            <p id="speed">7.70 <span id="unit">MPH <br /> Wind</span></p>
            <div id="divider">
                <Divider orientation="horizontal" />
            </div>
            <p id="gust">9.70 <span id="unit2">MPH <br /> Gusts</span></p>
        </div>
    )
}