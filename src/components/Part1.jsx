import React from "react";
import Nav from "./Nav";
import CardVariants from "./Card";
import BasicTextFields from "./Search";

export default function Part1(props) {
    return (
        <div id="part1">
            <div id="p1-search">
                <BasicTextFields 
                    change={props.change}
                    click={props.click}
                    onKeyDown={props.onKeyDown}
                    submit={props.submit}
                />
            </div>
            <div id="p1Text"><Nav 
                trueClick={props.trueClick}
                falseClick={props.falseClick}
                unit={props.unit}
            /></div>
            <div id="p1Content">
                <div id="temp-card-1">
                    <CardVariants
                        day={props.day1}
                        temp={props.temp1}
                        low={props.low1}
                        dailyImg={props.dailyImg1}
                    />
                </div>
                <div id="temp-card-2">
                    <CardVariants
                        day={props.day2}
                        temp={props.temp2}
                        low={props.low2}
                        dailyImg={props.dailyImg2}
                    />
                </div>
                <div id="temp-card-3">
                    <CardVariants
                        day={props.day3}
                        temp={props.temp3}
                        low={props.low3}
                        dailyImg={props.dailyImg3}
                    />
                </div>
                <div id="temp-card-4">
                    <CardVariants
                        day={props.day4}
                        temp={props.temp4}
                        low={props.low4}
                        dailyImg={props.dailyImg4}
                    />
                </div>
                <div id="temp-card-5">
                    <CardVariants
                        day={props.day5}
                        temp={props.temp5}
                        low={props.low5}
                        dailyImg={props.dailyImg5}
                    />
                </div>
                <div id="temp-card-6">
                    <CardVariants
                        day={props.day6}
                        temp={props.temp6}
                        low={props.low6}
                        dailyImg={props.dailyImg6}
                    />
                </div>
            </div>

        </div>
    )
}