import './js/getLocation';

const { getLocation } = require('./js/getLocation'); 
// import {
//   getLocation
// } from './js/getLocation';

import './styles/style.scss';
//import './js/app.js';



const callButton = document.getElementById('generate');

//TEST FUNCTION
callButton.addEventListener('click', (e) => {
  getLocation(e);
  console.log('clicked');
  console.count();
});


export {
  getLocation
}