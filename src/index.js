import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weather from './Weather';
import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon, faCloudSun, faCloudMoon, faCloud, faCloudShowersHeavy, faCloudSunRain, faCloudMoonRain, faCloudBolt, faSnowflake, faSmog, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weather defaultCity="New York"/>
  </React.StrictMode>
);
 library.add(faSun, faMoon,  faCloudSun, faCloudMoon, faCloud, faCloudShowersHeavy, faCloudSunRain, faCloudMoonRain, faCloudBolt, faSnowflake, faSmog, faDroplet, faWind);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
