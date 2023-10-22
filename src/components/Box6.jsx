import React from "react";
import LetterAvatars from "./Av2";
import LetterAvatars1 from "./Av1";

export default function Box6(props) {
    return (
        <div id="box6">
            <p id="highlights">Sunrise & Sunset</p>
            <div id="avatar1"> <LetterAvatars1
                sunrise={props.sunrise}
            /> </div>
            <div id="avatar2"> <LetterAvatars 
                sunset={props.sunset}
            /></div>
        </div>
    )
}