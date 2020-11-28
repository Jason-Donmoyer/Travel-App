const fetch = require('node-fetch');

async function getPixabay(city) {

let pixData = {};

try {
  await fetch(`http://localhost:8080/pix?city=${city}`, {
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

export { getPixabay };