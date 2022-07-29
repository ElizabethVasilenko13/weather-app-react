import React from "react";
import ForecastForFiveDays from "./ForecastForFiveDays";
import TomorrowForecast from "./TomorrowForecast";
import WeatherDeskr from "./WeatherDeskr";
import CurrentWeather from "./CurrentWeather";
import CityTime from "./CityTime";
import Input from "./Input";
import "./index.css";

import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faEye} from '@fortawesome/free-regular-svg-icons';
import {faDroplet} from '@fortawesome/free-solid-svg-icons';
import {faWind} from '@fortawesome/free-solid-svg-icons';

export default function Weather() {
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
					<Input />
					<div className="local-time reduce-font">Your Local Time:</div>
					<CityTime
					icon={faLocationDot}
						cityName="New York"
						month="July"
						dayNum="20"
						day="Tuesday"
						hour="15"
						minute="01"
					/>
					<CurrentWeather />
					<div className="bottom-data">
						<WeatherDeskr
							icon={faEye} 
							text="10km"
							deskr="Visibility"
						/>
						<WeatherDeskr
							icon={faDroplet} 
							text="68%"
							deskr="Humidity"
						/>
						<WeatherDeskr
							icon={faWind} 
							text="4.47km/h"
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
}
