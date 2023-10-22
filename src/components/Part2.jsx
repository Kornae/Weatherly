import React from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
import Box5 from "./Box5";
import Box6 from "./Box6";
import Nav2 from "./Nav2";

export default function Part2(props) {
    return (
        <div id="part2">
            <div id="p2Text"><Nav2 /></div>
            <div id="p2Content">
                <Box1
                    uv={props.uv}
                    label={props.label}
                />
                <Box2
                    speed={props.speed}
                    gusts={props.gusts}
                />
                <Box3
                    feels={props.feels}
                    description={props.description}
                />
                <Box4
                    humidity={props.humidity}
                    dew={props.dew}
                    slider={props.slider}
                />
                <Box5
                    visibility={props.visibility}
                    cloud={props.cloud}
                />
                <Box6
                    sunrise={props.sunrise}
                    sunset={props.sunset}
                />
            </div>
        </div>
    )
}