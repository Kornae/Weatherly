import React from "react";
import AutocompleteIntroduction from "../AutoComplete";
import Divider from '@mui/material/Divider';

export default function One(props) {
    return (
        <div id="one">
            <div id="search">
                <AutocompleteIntroduction
                    change={props.change}
                    click={props.click}
                    onKeyDown={props.onKeyDown}
                    submit={props.submit}
                /> </div>
            <div id="main-image">
                <img id="img-div" alt="icon" src={props.mainImg} />
            </div>
            <div id="weather">
                <div id="weather-outline">
                    <p id="temperature">{props.temp}°</p>
                    <div id="mobile-temp" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img id="mobile-image" style={{ width: 75 }} alt='weather icon' src={props.mainImg} />
                        <p id="m-temperature">{props.temp}°</p>
                    </div>
                    <p id="place">{props.location} <br /></p>
                    <p id="date"><span style={{ fontWeight: '400' }}>{props.day}, </span> <span style={{ color: '#a8a8a8' }}>{props.date}</span></p>
                </div>
            </div>

            <div id="divider"><Divider /></div>
            <div id="info">
                <div>

                    <p id="info-text"><span className="material-symbols-outlined" style={{ color: '#424242', marginRight: '6px' }}>weather_mix</span>{props.conditions}</p>
                    <p id="info-text"><span style={{ color: '#92BAD2', marginRight: '6px' }} class="material-symbols-outlined">
                        rainy_light
                    </span>Rain - {props.rain}%</p>
                </div>

            </div>
        </div>
    )
}