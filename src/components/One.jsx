import React from "react";
import BasicTextFields from "./Search";
import Divider from '@mui/material/Divider';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

export default function One() {
    return(
        <div id="one">
            <div id="search"> <BasicTextFields /> </div>
            <div id="main-image">
                <img id="img-div" alt="icon" src="https://icons.veryicon.com/png/o/weather/weather-fill/weather-cloudy-19.png" />
            </div>
            <div id="weather">
                <div id="weather-outline">
                    <p id="temperature">79°</p>
                    <div id="mobile-temp" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img id="mobile-image" style={{ width: 75 }} alt='weather icon' src='https://icons.veryicon.com/png/o/weather/weather-fill/weather-cloudy-19.png' />
                        <p id="m-temperature">79°</p>
                    </div>
                    <p id="place">Los Angeles, CA, <br /> <span id="country">United States</span> </p>
                    <p id="date"><span style={{ fontWeight: '400' }}>Monday,</span> <span style={{ color: '#a8a8a8' }}>8:00 AM</span></p>
                </div>
            </div>

            <div id="divider"><Divider /></div>
            <div id="info">
                <div>
                    <p id="info-text"><span style={{ color: '#a8a8a8', marginRight: '6px' }}><CloudQueueIcon /></span> Mostly Cloudy</p>
                    <p id="info-text"><span style={{ color: '#92BAD2', marginRight: '6px' }} class="material-symbols-outlined">
                        rainy_light
                    </span>Rain - 30%</p>
                </div>

            </div>
        </div>
    )
}