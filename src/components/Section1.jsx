import React from "react";
import Part1 from "./Part1";
import Part2 from "./Part2"
import BasicTextFields from "./Search";
import Divider from '@mui/material/Divider';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import CardInvertedColors from "./LocationCard";

export default function Section1() {
    return (
        <div id="s1-container">
            <div id="one">
                <div id="search"> <BasicTextFields /> </div>
                <div id="main-image">
                    <img id="img-div" alt="icon" src="https://icons.veryicon.com/png/o/weather/weather-fill/weather-cloudy-19.png" />
                </div>
                <div id="weather">
                <div>
                    <p id="temperature">12°</p>
                    <p id="date"><span style={{ fontWeight: '400' }}>Monday,</span> <span style={{ color: '#a8a8a8' }}>8:00</span></p>
                    </div>
                </div>
                <div id="divider"><Divider /></div>
                <div id="info">
                <div>
                    <p><span style={{ color: '#a8a8a8' }}><CloudQueueIcon /></span> Mostly Cloudy</p>
                    <p><span style={{ color: '#fad25d' }}><UmbrellaIcon /></span> Rain - 30%</p>
                    </div>
                </div>
                <div id="location">
                    <CardInvertedColors />
                </div>
            </div>
            <div id="two">
                <Part1 />
                <Part2 />
            </div>
        </div>
    )
}