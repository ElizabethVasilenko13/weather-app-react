import React, { useState, useEffect  } from "react";
import ForecastForFiveDays from "./ForecastForFiveDays";
import TomorrowForecast from "./TomorrowForecast";
import axios from "axios";

export default function Forecast(props){
	const [forecast, setForecast] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const apiKey = "094780c710fa4efd669f0df8c3991927";
	
	function handleResponse(response) {
		setForecast(response.data.daily);
    	setLoaded(true);
	}
	useEffect(() => {
		setLoaded(false);
 	}, [props.data]);

	function load() {
		let longitude = props.data.lon;
    	let latitude = props.data.lat;
		let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}
	if(loaded){
		return (
			<div className="container">
				<TomorrowForecast data = {forecast[1]}/>
				<div className="container">
					<div className="row future-forecast-days">
						{forecast.map((dailyForecast, index) => {
							if ( index < 5){
								return (
									<ForecastForFiveDays  data={dailyForecast} key={index}/>
										);
							} else {
								return null;
							}
						})}
					</div>
				</div>
			</div>
			);
	}else {
		load();
		return null;
	}
	

}