//import './js/getLocation';

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

//const { getLocation } = require('./js/getLocation'); 
// import {
//   getLocation
// } from './js/getLocation';

import './media/main-background-img.jpg';

import './styles/style.scss';
//import './js/app.js';



const callButton = document.getElementById('generate');


//TEST FUNCTION
// callButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   let cityName = document.getElementById('city').value;
//   getLocation(cityName);
//   console.log('clicked');
//   console.count();
// });


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



callButton.addEventListener('click', getDataCall);
