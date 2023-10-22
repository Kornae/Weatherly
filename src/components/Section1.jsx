import React, { useState, useEffect, useRef } from "react";
import One from "./One";
import Two from "./Two";
import icons from "./Icons";

export default function Section1() {
    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState('');
    const [search, setSearch] = useState('Chicago');
    const [unit, setUnit] = useState(false);

    const key = process.env.REACT_APP_API_KEY;

    const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?unitGroup=us&iconSet=icons2&include=current&key=${key}&contentType=json`;
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            fetch(api)
                .then((res) => res.json())
                .then((data) => {
                    setWeatherData(data);
                });
        }
    }, [search]);


    let handleChange = (e) => {
        let cityValue = e.target.value;
        setCity(cityValue)
    }

    let handleClick = () => {
        setSearch(city)
    }

    function handleTrueClick() {
        setUnit(true)
    }

    function handleFalseClick() {
        setUnit(false)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setSearch(city)
        }
        event.preventDefault()
    };

    if (weatherData.length === 0) {
        return <div id="s1-container">
            <One
                change={handleChange}
                click={handleClick}
                onKeyDown={handleKeyDown}
                submit={handleFormSubmit}
                temp='0°'
                location='Location Unavailable'
                conditions='No current conditions'
                rain='0%'
                day='Today'
                date='0:00'
            />
            <Two
                uv='0'
                label='N/A'
                speed='0'
                gusts='0'
                feels='0'
                description='Description Unavailable'
                humidity='0'
                slider='0'
                dew='0'
                visibility='0'
                cloud='0'
                sunrise='0:00'
                sunset='0:00'
            />
        </div>
    }

    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        const formattedHours = hours % 12 || 12;

        const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
        return formattedTime;
    }

    const address = weatherData.resolvedAddress;
    const temp = weatherData?.days[0]?.temp ?? null;

    const high1 = weatherData.days[1].tempmax;
    const high2 = weatherData.days[2].tempmax;
    const high3 = weatherData.days[3].tempmax;
    const high4 = weatherData.days[4].tempmax;
    const high5 = weatherData.days[5].tempmax;
    const high6 = weatherData.days[6].tempmax;

    const low1 = weatherData.days[1].tempmin;
    const low2 = weatherData.days[2].tempmin;
    const low3 = weatherData.days[3].tempmin;
    const low4 = weatherData.days[4].tempmin;
    const low5 = weatherData.days[5].tempmin;
    const low6 = weatherData.days[6].tempmin;

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const sevenDays = weatherData.days.slice(0, 7);

    const date = sevenDays.map((dayData) => {
        const weatherDate = dayData.datetime;
        const [year, month, day] = weatherDate.split("-").map(Number);
        return new Date(year, month - 1, day);
    });

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const feels = weatherData.currentConditions.feelslike;
    const conditions = weatherData.currentConditions.conditions;
    const rain = weatherData.currentConditions.precipprob;
    const icon = weatherData.currentConditions.icon;
    const icon1 = weatherData.days[1].icon;
    const icon2 = weatherData.days[2].icon;
    const icon3 = weatherData.days[3].icon;
    const icon4 = weatherData.days[4].icon;
    const icon5 = weatherData.days[5].icon;
    const icon6 = weatherData.days[6].icon;
    function getIconByName(name) {
        const weatherIcon = icons.find(iconObj => iconObj.hasOwnProperty(name));

        if (weatherIcon) {
            return weatherIcon[name];
        } else {
            return null;
        }
    }

    const iconURL = getIconByName(icon);
    if (iconURL) {
        console.log(`${iconURL}`);
    } else {
        console.log('Icon not found');
    }
    console.log(icon)

    const wind = weatherData.currentConditions.windspeed;
    const gusts = weatherData.currentConditions.windgust;
    const humidity = weatherData.currentConditions.humidity;
    const dew = weatherData.currentConditions.dew;
    const uv = weatherData.currentConditions.uvindex;
    const description = weatherData.days[0].description;
    const visibility = weatherData.currentConditions.visibility;
    const cloud = weatherData.currentConditions.cloudcover;
    const sunrise = weatherData.currentConditions.sunrise;
    const sunriseTimeParts = sunrise.split(":");
    const formattedSunrise = sunriseTimeParts[0].replace(/^0/, '') + ":" + sunriseTimeParts[1];
    const sunset = weatherData.currentConditions.sunset;
    const sunsetTimeParts = sunset.split(":");
    const formattedSunset = (sunsetTimeParts[0] - 12) + ":" + sunsetTimeParts[1];
    let uvLabel = '';

    if (uv >= 11) {
        uvLabel = 'Extreme';
    } else if (uv >= 8) {
        uvLabel = 'Very High';
    } else if (uv >= 6) {
        uvLabel = 'High';
    } else if (uv >= 3) {
        uvLabel = 'Moderate';
    } else {
        uvLabel = 'Low';
    }
    return (
        <div id="s1-container">
            <One
                change={handleChange}
                click={handleClick}
                onKeyDown={handleKeyDown}
                submit={handleFormSubmit}
                mainImg={iconURL}
                temp={unit ? Math.round(((temp) - 32) * (5 / 9)) : Math.round(temp)}
                location={address}
                conditions={conditions}
                rain={rain}
                day={`${days[date[0].getDay()]}`}
                date={`${months[date[0].getMonth()]} ${date[0].getDate()}`}
            />
            <Two
                change={handleChange}
                click={handleClick}
                onKeyDown={handleKeyDown}
                submit={handleFormSubmit}
                trueClick={handleTrueClick}
                falseClick={handleFalseClick}
                unit={unit}
                uv={uv}
                label={uvLabel}
                speed={Math.round(wind)}
                gusts={Math.round(gusts)}
                feels={unit ? Math.round(((feels) - 32) * (5 / 9)) : Math.round(feels)}
                description={description}
                humidity={Math.round(humidity)}
                slider={Math.round(humidity)}
                dew={Math.round(dew)}
                visibility={Math.round(visibility)}
                cloud={Math.round(cloud)}
                sunrise={formattedSunrise}
                sunset={formattedSunset}

                day1={days[date[1].getDay()]}
                day2={days[date[2].getDay()]}
                day3={days[date[3].getDay()]}
                day4={days[date[4].getDay()]}
                day5={days[date[5].getDay()]}
                day6={days[date[6].getDay()]}

                dailyImg1={getIconByName(icon1)}
                dailyImg2={getIconByName(icon2)}
                dailyImg3={getIconByName(icon3)}
                dailyImg4={getIconByName(icon4)}
                dailyImg5={getIconByName(icon5)}
                dailyImg6={getIconByName(icon6)}

                temp1={unit ? Math.round(((high1) - 32) * (5 / 9)) : Math.round(high1)}
                temp2={unit ? Math.round(((high2) - 32) * (5 / 9)) : Math.round(high2)}
                temp3={unit ? Math.round(((high3) - 32) * (5 / 9)) : Math.round(high3)}
                temp4={unit ? Math.round(((high4) - 32) * (5 / 9)) : Math.round(high4)}
                temp5={unit ? Math.round(((high5) - 32) * (5 / 9)) : Math.round(high5)}
                temp6={unit ? Math.round(((high6) - 32) * (5 / 9)) : Math.round(high6)}

                low1={unit ? Math.round(((low1) - 32) * (5 / 9)) : Math.round(low1)}
                low2={unit ? Math.round(((low2) - 32) * (5 / 9)) : Math.round(low2)}
                low3={unit ? Math.round(((low3) - 32) * (5 / 9)) : Math.round(low3)}
                low4={unit ? Math.round(((low4) - 32) * (5 / 9)) : Math.round(low4)}
                low5={unit ? Math.round(((low5) - 32) * (5 / 9)) : Math.round(low5)}
                low6={unit ? Math.round(((low6) - 32) * (5 / 9)) : Math.round(low6)}
            />
        </div>
    )
}