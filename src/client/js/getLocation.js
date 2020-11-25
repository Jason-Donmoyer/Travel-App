const fetch = require('node-fetch');

function getLocation(event) {
  event.preventDefault();

  let cityName = document.getElementById('city').value;
  console.log(cityName)

  fetch ('http://localhost:8080/results', {
    method: 'POST',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: cityName,
  })
  .then((res) => res.json)
  .then((res) => {
    console.log(res);
  });
}

export { getLocation };