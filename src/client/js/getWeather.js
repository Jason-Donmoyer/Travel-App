const fetch = require('node-fetch');

async function getWeather(lat, lon) {

let weatherData = {};

try {
    await fetch (`http://localhost:8080/weather?lat=${lat}&lon=${lon}`, {
      method: 'GET',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify(cityName),
    })
    .then (res => res.json())
    .then(async res => {
      //console.log(res.data[0].state_code);
      //console.log(res.data[0].weather.description);
      weatherData.temp = res.data[0].temp;
      weatherData.description = res.data[0].weather.description;
    });
  } catch (err) {
    console.log(err);
  }
  return weatherData;
}

export { getWeather };
