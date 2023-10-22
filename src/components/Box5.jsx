import React from "react";

export default function Box5(props) {
    return (
        <div id="box5">
            <p id="highlights">Visibility</p>
            <p id="visibility">{props.visibility} <span id="unit">mi</span></p>
            <p id="dew">Cloud Cover: {props.cloud}%</p>
        </div>
    )
}