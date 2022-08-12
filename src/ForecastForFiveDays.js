import React from "react";
import CurrentWeatherImg from "./CurrentWeatherImg";


export default function ForecastForFiveDays(props) {
	
	function day() {
		let date = new Date(props.data.dt * 1000);
		let day = date.getDay();
		const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		return days[day];
  	}
	return (
		<div className="days-block col-2 text-center">
			<div className="block">
				<div className="block-title ">{day()}</div>
				<CurrentWeatherImg data={props.data.weather[0]}/>
				<span id="temp" className="block-degrees col-4">
					{Math.round(((props.data.temp.max) + (props.data.temp.max)) / 2)}°
				</span>
			</div>
		</div>
		);
}
