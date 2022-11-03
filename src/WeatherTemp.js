import React from "react";

export default function WeatherTemp(props) {
		return (
			<div className="tempereture-content">
					<div className="text-capitalize">{props.data.description}</div>
					<div className="content-degrees" id="degrees">
						{Math.round(props.data.temperature)}°
					</div>
				</div>
			);
}
