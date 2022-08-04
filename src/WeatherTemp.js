import React, { useState } from "react";

export default function WeatherTemp(props) {
	const [unit, setUnit] = useState('celsius');

	function showFahrenheit(e){
		e.preventDefault();
		setUnit('fahrenheit');
	}

	function showCelsius(e){
		e.preventDefault();
		setUnit('celsius');
	}

	if(unit === 'celsius'){
		return (
			<div className="tempereture-content">
					<div className="text-capitalize">{props.data.description}</div>
					<span className="content-degrees" id="degrees">
						{Math.round(props.data.temperature)}
					</span>
					<div className="link">
						°C
						<a href="/" id="fahrenheit" className="link-degrees" onClick={showFahrenheit}>
						°F
						</a>
					</div>
				</div>
			);
	} else {
		let fahrenheit = Math.round((props.data.temperature * 9/5) + 32);
		return (
				<div className="tempereture-content">
					<div className="text-capitalize">{props.data.description}</div>
					<span className="content-degrees" id="degrees">
						{fahrenheit}
					</span>
					<div className="link">
						<a href="/" id="fahrenheit" className="link-degrees" onClick={showCelsius}>
						°C
						</a>
						°F
					</div>
				</div>
			);
	}
}