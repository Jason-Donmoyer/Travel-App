

// IMPORTS

import { getDataCall } from './js/app';
import { getLocation } from './js/getLocation';
import { getCountryLocation } from './js/getLocation';
import { getWeather } from './js/getWeather'; 
import { getForecast } from './js/getWeather';
import { getPixabay } from './js/getPixabay';
import { getPixabayCountry } from './js/getPixabay';
import { getCurrentDate } from './js/getDate'; 
import { firstCharUpper } from './js/helperFunctions';
import { updateUI } from './js/updateUI';

// Images
import './media/main-background-img.jpg';

// Styles
import './styles/style.scss';

// Main submit Button
const callButton = document.getElementById('generate');

// EXPORTS
export {
  getDataCall,
  getLocation,
  getCountryLocation,
  getWeather,
  getForecast,
  getPixabay,
  getPixabayCountry,
  getCurrentDate,
  firstCharUpper,
  updateUI,
}

// Event listener for callButton
callButton.addEventListener('click', getDataCall);
