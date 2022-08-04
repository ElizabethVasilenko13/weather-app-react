import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CurrentWeather(props) {
	const [unit, setUnit] = useState('celsius');
	
	const icons = {
		"01d": "sun",
		"01n": "moon",
		"02d": "cloud-sun",
		"02n": "cloud-moon",
		"03d": "cloud",
		"03n": "cloud",
		"04d": "cloud",
		"04n": "cloud",
		"09d": "cloud-showers-heavy",
		"09n": "cloud-showers-heavy",
		"10d": "cloud-sun-rain",
		"10n": "cloud-moon-rain",
		"11d": "cloud-bolt",
		"11n": "cloud-bolt",
		"13d": "snowflake",
		"13n": "snowflake",
		"50d": "smog",
		"50n": "smog",
	};
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
			<div className="temperature ">
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
				<FontAwesomeIcon icon={icons[props.data.icon]} className="icon-element white-icon"/>
			</div>
			);
	} else {
		let fahrenheit = Math.round((props.data.temperature * 9/5) + 32);
		return (
			<div className="temperature ">
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
				<FontAwesomeIcon icon={icons[props.data.icon]} className="icon-element white-icon"/>
			</div>
			);
	}
	
}
