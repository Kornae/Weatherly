import React from "react";
import Nav from "./Nav";
import CardVariants from "./Card";
import BasicTextFields from "./Search";

export default function Part1() {
    return (
        <div id="part1">
        <div id="p1-search">
            <BasicTextFields />
            </div>
            <div id="p1Text"><Nav /></div>
            <div id="p1Content">
                <div id="temp-card-1">
                    <CardVariants
                        day='Mon'
                        temp='82°'
                        low='65°'
                    />
                </div>
                <div id="temp-card-2">
                    <CardVariants
                        day='Tue'
                        temp='83°'
                        low='67°'
                    />
                </div>
                <div id="temp-card-3">
                    <CardVariants
                        day='Wed'
                        temp='87°'
                        low='63°'
                    />
                </div>
                <div id="temp-card-4">
                    <CardVariants
                        day='Thu'
                        temp='79°'
                        low='68°'
                    />
                </div>
                <div id="temp-card-5">
                    <CardVariants
                        day='Fri'
                        temp='78°'
                        low='69°'
                    />
                </div>
                <div id="temp-card-6">
                    <CardVariants
                        day='Sat'
                        temp='81°'
                        low='65°'
                    />
                </div>
                
                {/* <div id='card-content' className="card">
                   
                        <p id='label'>Sun</p>
                
                    <div id="weekly-img">
                        <img id="icon" src="https://icons.veryicon.com/png/o/weather/weather-fill/weather-cloudy-night-1.png" alt="icon" />
                    </div>
                    <p id='label-content'><span id="high">15°</span></p>
                </div>
                <div id='card-content' className="card">
                    <p id='label'>Mon</p>
                    <div id="weekly-img">
                        <img id="icon" src="https://icons.veryicon.com/png/o/weather/weather-fill/weather-cloudy-night-1.png" alt="icon" />
                    </div>
                    <p id='label-content'><span id="high">15°</span></p>
                </div>
                <div id='card-content' className="card">
                    <p id='label'>Tue</p>
                    <div id="weekly-img">
                        <img id="icon" src="https://icons.veryicon.com/png/o/weather/weather-fill/weather-cloudy-night-1.png" alt="icon" />
                    </div>
                    <p id='label-content'><span id="high">15°</span></p>
                </div>
                <div id='card-content' className="card">
                    <p id='label'>Wed</p>
                    <div id="weekly-img">
                        <img id="icon" src="https://icons.veryicon.com/png/o/weather/weather-fill/weather-cloudy-night-1.png" alt="icon" />
                    </div>
                    <p id='label-content'><span id="high">15°</span></p>
                </div>
                <div id='card-content' className="card">
                    <p id='label'>Thu</p>
                    <div id="weekly-img">
                        <img id="icon" src="https://icons.veryicon.com/png/o/weather/weather-fill/weather-cloudy-night-1.png" alt="icon" />
                    </div>
                    <p id='label-content'><span id="high">15°</span></p>
                </div>
                <div id='card-content' className="card">
                    <p id='label'>Fri</p>
                    <div id="weekly-img">
                        <img id="icon" src="https://icons.veryicon.com/png/o/weather/weather-fill/weather-cloudy-night-1.png" alt="icon" />
                    </div>
                    <p id='label-content'><span id="high">15°</span></p>
                </div>
                <div id='card-content' className="card">
                    <p id='label'>Sat</p>
                    <div id="weekly-img">
                        <img id="icon" src="https://icons.veryicon.com/png/o/weather/weather-fill/weather-cloudy-night-1.png" alt="icon" />
                    </div>
                    <p id='label-content'><span id="high">15°</span></p>
                </div> */}
            </div>

        </div>
    )
}