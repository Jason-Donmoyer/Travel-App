import './js/getLocation';

import { getDataCall } from './js/app';
import { getLocation } from './js/getLocation';
import { getWeather } from './js/getWeather'; 

//const { getLocation } = require('./js/getLocation'); 
// import {
//   getLocation
// } from './js/getLocation';

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
  getWeather,
}

callButton.addEventListener('click', getDataCall);