import React from "react";
import CurrentWeatherImg from "./CurrentWeatherImg";

export default function TomorrowForecast(props) {
return (
	<div className="future-forecast">
		<div className="block-forecast ">
			<CurrentWeatherImg data={props.data.weather[0]}/>
			<div className="future-content  text-center">
				<div className="content-weater">Tomorrow</div>
				<div className="future-deskr text-capitalize">{props.data.weather[0].description}</div>
				<div id="tomorrow-weather" className="content-degrees">
					{Math.round(((props.data.temp.max) + (props.data.temp.max)) / 2)}°
				</div>
				<div>
					<span id="max-temp" className="block-degrees">
						Max: {Math.round(props.data.temp.max)}°/
					</span>
					<span id="min-temp" className="block-degrees">
						Min: {Math.round(props.data.temp.max)}°
					</span>
				</div>
			</div>
		</div>
	</div>
);
}
