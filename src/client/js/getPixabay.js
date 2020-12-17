const fetch = require('node-fetch');

async function getPixabay(city, country) {

let pixData = {};

// get picture data for city and country
try {
  await fetch(`http://localhost:8080/pix?city=${city}&country=${country}`, {
    method: 'GET',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(async res => {
        console.log(res.hits[0].webformatURL);
        pixData.img = res.hits[0].webformatURL;
      });
  
  } catch (err) {
    console.log(err);
  }
return pixData;
}

async function getPixabayCountry(country) {

  let pixData = {};
  
  try {
    await fetch(`http://localhost:8080/countrypix?country=${country}`, {
      method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(async res => {
          console.log(res.hits[0].webformatURL);
          pixData.img = res.hits[0].webformatURL;
        });
    
    } catch (err) {
      console.log(err);
    }
  return pixData;
  }

export { getPixabay,
         getPixabayCountry
};