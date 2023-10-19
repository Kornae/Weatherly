import React from "react";
import ProgressBar from "./UVProgress";

export default function Box1() {
    return(
        <div id="box1">
            <p id="highlights">UV Index</p>

            <div id="pg-div">
                <div id="progress">
                    <ProgressBar value={5} max={15} width={'100%'} className="custom-progress-bar" />
                    <span id="total" style={{ fontSize: '2.6rem' }}> {5} </span>
                </div>
            </div>

            <p id="content">Moderate</p>
        </div>
    )
}