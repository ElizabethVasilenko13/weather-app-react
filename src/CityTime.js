import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CityTime(props) {
	let date = new Date();
	let monthDay =date.getDate();
	let mounth = date.getMonth();
	let dayWeek = date.getDay();
	let hours = date.getHours();
	let minutes = date.getMinutes();

	let daysOfWeek = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
					];
	let months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
				];
	if (hours < 10){
		hours = `0${hours}`;
	}
	if (minutes < 10){
		minutes = `0${minutes}`;
	}
	return (
	<div className="row">
		<div className="col-6 icon-el">
			<FontAwesomeIcon icon="location-dot" className="icons__firs-page" />
			<div className="icon-text" id="default-city">
				{props.data.city}
			</div>
		</div>
		<div className="col-6 day">
			{months[mounth]} {monthDay},  {daysOfWeek[dayWeek]} {hours}:{minutes}
		</div>
	</div>
	);
}
