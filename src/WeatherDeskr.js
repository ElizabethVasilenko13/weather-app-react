import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WeatherDeskr(props) {
return (
	<div className="bottom-el">
		<div className="icon-el">
			<FontAwesomeIcon icon={props.icon} className="icons__firs-page"/>	
			<div className="icon-text" id="visib-id">
				{props.text}{props.unit}
			</div>
		</div>
		<div className="text-sbsc reduce-font">{props.deskr}</div>
	</div>
);
}
