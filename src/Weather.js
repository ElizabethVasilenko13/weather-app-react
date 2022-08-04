import React, { useState } from "react";
import axios from "axios";
import ForecastForFiveDays from "./ForecastForFiveDays";
import TomorrowForecast from "./TomorrowForecast";
import WeatherDeskr from "./WeatherDeskr";
import CurrentWeather from "./CurrentWeather";
import CityTime from "./CityTime";
import "./index.css";

import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faEye} from '@fortawesome/free-regular-svg-icons';
import {faDroplet} from '@fortawesome/free-solid-svg-icons';
import {faWind} from '@fortawesome/free-solid-svg-icons';

export default function Weather(props) {
	const [weather, setWeather] = useState({ ready: false });
	const [city, setSity] = useState(props.defaultCity);

	function getWeather(response) {
		console.log(response.data);
		setWeather({
			ready: true,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			visibility: response.data.visibility / 1000,
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
			wind: response.data.wind.speed,
			city: response.data.name
		});
	}
	function handleSubmit(e){
		e.preventDefault();
		searchWeather();
	}

	function handleChange(e){
		e.preventDefault();
		setSity(e.target.value);
	}

	function searchWeather(){
		const apiKey = "094780c710fa4efd669f0df8c3991927";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(getWeather);
	}
	
	if(weather.ready){
		return (
		<div>
			<div className="wrapper">
				<div className="container">
					<div className="row wrap">
						<div className="theme-sw">
							<div className="theme-sw-text reduce-font">Switch theme</div>
							<div className="switch-btn reduce-font"></div>
						</div>
						<div className="col-6 first-part">
							<div className="search-input">
								<form id="search-form" onSubmit={handleSubmit}>
								<input onChange={handleChange}
									id="search-input"
									type="text"
									name="location"
									placeholder="Enter location"
									className="colortext col-6"
								/>
								<button className="iput-btn " id="btn-search">
									Search
								</button>
								<button className="iput-btn" id="btn-current">
									Current
								</button>
								</form>
							</div>
							<div className="local-time reduce-font">Your Local Time:</div>
							<CityTime
								icon={faLocationDot}
								cityName={props.defaultCity}
								month="July"
								dayNum="20"
								day="Tuesday"
								hour="15"
								minute="01"
							/>
							<CurrentWeather 
							temp={Math.round(weather.temperature)}
							deskr={weather.description}
							/>
							<div className="bottom-data">
								<WeatherDeskr
									icon={faEye} 
									text={weather.visibility}
									unit="km"
									deskr="Visibility"
								/>
								<WeatherDeskr
									icon={faDroplet} 
									text={weather.humidity}
									unit="%"
									deskr="Humidity"
								/>
								<WeatherDeskr
									icon={faWind} 
									text={weather.wind}
									unit="km/h"
									deskr="Wind"
								/>
							</div>
						</div>
						<div className="col-6 second-part">
							<div className="container">
								<TomorrowForecast
									day="Tomorrow"
									deskr="Clear"
									AvDegree="25"
									max="26"
									min="35"
								/>
								<div className="container">
									<div className="row future-forecast-days">
										<ForecastForFiveDays dayOfTheWeek="Tue" temp={29} />
										<ForecastForFiveDays dayOfTheWeek="Tue" temp={29} />
										<ForecastForFiveDays dayOfTheWeek="Tue" temp={29} />
										<ForecastForFiveDays dayOfTheWeek="Tue" temp={29} />
										<ForecastForFiveDays dayOfTheWeek="Tue" temp={29} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className="source">
				<a className="source-link" rel="noreferrer" href="https://github.com/ElizabethVasilenko13/weather-app-react.git" target="_blank">Open-source code</a> by Elizabeth Vasilenko
			</footer>
		</div>
		);
	} else {
		searchWeather();
	}

}
