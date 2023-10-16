import React from "react";

export default function Card(props) {
    return (
        <div id="weekly-cards" className="card">
           
           <div id="day">{props.day}</div>
            <div id="weekly-img">
                <img id="icon" src="https://static.thenounproject.com/png/1815121-200.png" alt="icon"/>
            </div>
            <div id="weekly-temp">{props.temp}</div>
        </div>
    )
}