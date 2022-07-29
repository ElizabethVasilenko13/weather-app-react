import React from "react";
import image from "./01d.svg";

export default function CurrentWeatherImg() {
return (
	<img
		src={image}
		alt=""
		id="dd"
		className="icon-element white-icon"
		width="120"
		height="120"
	/>
	);
}