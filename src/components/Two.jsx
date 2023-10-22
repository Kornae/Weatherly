import React from "react";
import Part1 from "./Part1";
import Part2 from "./Part2"


export default function Two(props) {
    return (
        <div id="two">
            <Part1
                change={props.change}
                click={props.click}
                onKeyDown={props.onKeyDown}
                submit={props.submit}

                trueClick={props.trueClick}
                falseClick={props.falseClick}
                unit={props.unit}

                day1={props.day1}
                temp1={props.temp1}
                low1={props.low1}
                dailyImg1={props.dailyImg1}

                day2={props.day2}
                temp2={props.temp2}
                low2={props.low2}
                dailyImg2={props.dailyImg2}

                day3={props.day3}
                temp3={props.temp3}
                low3={props.low3}
                dailyImg3={props.dailyImg3}

                day4={props.day4}
                temp4={props.temp4}
                low4={props.low4}
                dailyImg4={props.dailyImg4}

                day5={props.day5}
                temp5={props.temp5}
                low5={props.low5}
                dailyImg5={props.dailyImg5}

                day6={props.day6}
                temp6={props.temp6}
                low6={props.low6}
                dailyImg6={props.dailyImg6}

            />
            <Part2
                uv={props.uv}
                label={props.label}
                speed={props.speed}
                gusts={props.gusts}
                feels={props.feels}
                description={props.description}
                humidity={props.humidity}
                slider={props.slider}
                dew={props.dew}
                visibility={props.visibility}
                cloud={props.cloud}
                sunrise={props.sunrise}
                sunset={props.sunset}
            />
        </div>
    )
}