import React from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './Weather';

import { library } from '@fortawesome/fontawesome-svg-core';
import {faSun, faMoon, faCloudSun, 
		faCloudMoon, faCloud, faCloudShowersHeavy, 
		faCloudSunRain, faCloudMoonRain, faCloudBolt, 
		faSnowflake, faSmog, faDroplet, 
		faWind, faLocationDot} from '@fortawesome/free-solid-svg-icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Weather defaultCity="New York"/>
	</React.StrictMode>
);

library.add(faSun, faMoon,  faCloudSun,
			faCloudMoon, faCloud, faCloudShowersHeavy, 
			faCloudSunRain, faCloudMoonRain, 
			faCloudBolt, faSnowflake, faSmog, 
			faDroplet, faWind, faLocationDot);


