import React from "react";
import CurrentWeatherImg from "./CurrentWeatherImg";

export default function CurrentWeather(props) {
return (
	<div className="temperature ">
		<div className="tempereture-content">
			<div className="content-weater text-capitalize">{props.deskr}</div>
			<span className="content-degrees" id="degrees">
				{props.temp}
			</span>
			<div className="link">
				<a href="/" id="celsius" className="link-degrees">
				°C
				</a>
				<a href="/" id="fahrenheit" className="link-degrees">
				°F
				</a>
			</div>
		</div>
		<CurrentWeatherImg />
	</div>
);
}
