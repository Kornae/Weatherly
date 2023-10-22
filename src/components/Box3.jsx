import React from "react";

export default function Box3(props) {
    return (
        <div id="box3">
            <p id="highlights">Feels Like</p>
            <p id="flTemp">{props.feels}°</p>
            <p id="description">{props.description}</p>
        </div>
    )
}