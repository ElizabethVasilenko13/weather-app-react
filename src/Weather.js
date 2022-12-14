import React, { useState } from "react";
import axios from "axios";
import WeatherDeskr from "./WeatherDeskr";
import CurrentWeatherImg from "./CurrentWeatherImg";
import CityTime from "./CityTime";
import "./index.css";
import WeatherTemp from "./WeatherTemp";
import Forecast from './Forecast';
import {faEye} from '@fortawesome/free-regular-svg-icons';


export default function Weather(props) {
	const [weather, setWeather] = useState({ ready: false });
	const [city, setSity] = useState(props.defaultCity);
	const apiKey = "094780c710fa4efd669f0df8c3991927";
	
	function getWeather(response) {
		console.log(response.data);
		setWeather({
			ready: true,
			date: new Date(response.data.dt * 1000),
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			visibility: response.data.visibility / 1000,
			icon: response.data.weather[0].icon,
			description: response.data.weather[0].description,
			wind: response.data.wind.speed,
			city: response.data.name,
			coord: response.data.coord
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
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(getWeather);
	}
	
	function handlePosition(e){
		e.preventDefault();
		navigator.geolocation.getCurrentPosition((position) => {
			let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;;
			axios.get(apiUrl).then(getWeather);
			});
	}

	if(weather.ready){
		return (
			<div>
			<div className="wrapper">
				<div className="container">
					<div className="row wrap">
						
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
								<button className="iput-btn" id="btn-current" onClick={handlePosition}>
									Current
								</button>
								</form>
							</div>
							<div className="local-time reduce-font">Your Local Time:</div>
							<CityTime
								data={weather}
							/>
							<div className="temperature">
								<WeatherTemp data={weather}/>
								<CurrentWeatherImg data={weather}/>
							</div>
							<div className="bottom-data">
								<WeatherDeskr
									icon={faEye} 
									text={weather.visibility}
									unit="km"
									deskr="Visibility"
								/>
								<WeatherDeskr
									icon="droplet"
									text={weather.humidity}
									unit="%"
									deskr="Humidity"
								/>
								<WeatherDeskr
									icon="wind" 
									text={weather.wind}
									unit="km/h"
									deskr="Wind"
								/>
							</div>
						</div>
						<div className="col-6 second-part">
							<div className="container">
								<Forecast data={weather.coord}/>
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
