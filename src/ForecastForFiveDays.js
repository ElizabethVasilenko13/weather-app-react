import React from "react";
import image from "./01d.svg";

export default function ForecastForFiveDays(props) {
return (
	<div className="days-block col-2 text-center">
		<div className="block">
			<div className="block-title ">{props.dayOfTheWeek}</div>
			<img src={image} className="weather-icon" alt="weather-icon"/>
			<span id="temp" className="block-degrees col-4">
				{props.temp}°
			</span>
		</div>
	</div>
	);
}
