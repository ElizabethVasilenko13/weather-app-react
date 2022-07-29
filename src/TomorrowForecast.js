import React from "react";
import image from "./01d.svg";

export default function TomorrowForecast(props) {
return (
	<div className="future-forecast">
		<div className="block-forecast ">
			<img
				src={image}
				className="fa-cloud-rain white-icon "
				width="130"
				height="130"
			/>
			<div className="future-content  text-center">
				<div className="content-weater">{props.day}</div>
				<div className="future-deskr">{props.deskr}</div>
				<div id="tomorrow-weather" className="content-degrees">
					{props.AvDegree}°
				</div>
				<div>
					<span id="max-temp" className="block-degrees">
						Max: {props.max}°/
					</span>
					<span id="min-temp" className="block-degrees">
						Min: {props.min}°
					</span>
				</div>
			</div>
		</div>
	</div>
);
}
