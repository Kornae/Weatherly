import React from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import Box4 from "./Box4";
import Box5 from "./Box5";
import Box6 from "./Box6";
import Nav2 from "./Nav2";

export default function Part2() {
    return(
        <div id="part2">
            <div id="p2Text"><Nav2 /></div>
            <div id="p2Content">
                <Box1 />
                <Box2 />
                <Box3 />
                <Box4 />
                <Box5 />
                <Box6 />
            </div>
        </div>
    )
}