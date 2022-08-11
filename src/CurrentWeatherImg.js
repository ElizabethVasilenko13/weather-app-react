import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function CurrentWeatherImg(props) {
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
		return (
				<FontAwesomeIcon icon={icons[props.data.icon]} className="icon-element white-icon"/>
			);
}
