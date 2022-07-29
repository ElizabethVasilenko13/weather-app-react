import React from "react";

export default function Input() {
return (
<div className="search-input">
	<form id="search-form">
	<input
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
);
}
