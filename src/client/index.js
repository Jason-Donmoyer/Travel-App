//import './js/getLocation';

import { getDataCall } from './js/app';
import { getLocation } from './js/getLocation';
import { getWeather } from './js/getWeather'; 
import { getPixabay } from './js/getPixabay';

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
  getWeather,
  getPixabay,
}

callButton.addEventListener('click', getDataCall);