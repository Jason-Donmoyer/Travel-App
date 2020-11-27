const fetch = require('node-fetch');

async function getLocation() {
  //event.preventDefault();
  let locationData = {};

  let cityName = document.getElementById('city').value;
  console.log(cityName)
  try {
    await fetch (`http://localhost:8080/results?city=${cityName}`, {
      method: 'GET',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify(cityName),
    })
    .then(res => res.json())
    .then(async res => {
      console.log(res);
      locationData.longitude = res.geonames[0].lng;
      locationData.latitude = res.geonames[0].lat;
    });
  } catch (err) {
    console.log(err);
  }
  return locationData;
}

export { getLocation };