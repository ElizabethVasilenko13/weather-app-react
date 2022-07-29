import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function CityTime(props) {
return (
<div className="row">
	<div className="col-6 icon-el">
		<FontAwesomeIcon icon={props.icon} className="icons__firs-page" />
		<div className="icon-text" id="default-city">
			{props.cityName}
		</div>
	</div>
	<div className="col-6 day">
		{props.month} {props.dayNum} , {props.day} {props.hour}:{props.minute}
	</div>
</div>
);
}
