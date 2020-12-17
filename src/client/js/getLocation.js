const fetch = require('node-fetch');

// get city and country coordinates
async function getLocation() {
  let locationData = {};

  let cityName = document.getElementById('city').value;
  let countryName = document.getElementById('country').value;
  console.log(cityName, countryName);
  

  try {
    await fetch (`http://localhost:8080/location?city=${cityName}&country=${countryName}`, {
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
      locationData.name = res.geonames[0].name;
      locationData.country = res.geonames[0].countryName;
      locationData.longitude = res.geonames[0].lng;
      locationData.latitude = res.geonames[0].lat;
    });
  } catch (err) {
    console.log(err);
  }
  return locationData;
}

async function getCountryLocation() {
  let locationData = {};

  //let cityName = document.getElementById('city').value;
  let countryName = document.getElementById('country').value;
  console.log(cityName, countryName);
  try {
    await fetch (`http://localhost:8080/locationcountry?country=${countryName}`, {
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
      //locationData.name = res.geonames[0].name;
      locationData.country = res.geonames[0].countryName;
      locationData.longitude = res.geonames[0].lng;
      locationData.latitude = res.geonames[0].lat;
    });
  } catch (err) {
    console.log(err);
  }
  return locationData;
}

export { getLocation,
         getCountryLocation
};