
export async function getDataCall(e) {
  
  if (document.getElementById('city').value === '') {
    alert('Please enter a city');
    return;
  }

  if (document.getElementById('arrival-date').value === '') {
    alert('Please enter a valid arrival date');
    return;
  }

  e.preventDefault();
  console.log('form submitted');

  // array to store api response data
  let userInputData = [];

  // call getCurrentDate function to get data for weather and forcast
  const dateData = Client.getCurrentDate();
  const isOneWeek = dateData[0];
  const numDays = dateData[1];
  let tripLength;
  if (!dateData[2]) {
    tripLength = 0;
  } else {
    tripLength = dateData[2];
  }
  console.log([isOneWeek, numDays, tripLength]);
  

  // check to see if trip is within Weatherbit forecast boundaries
  if (numDays > 14) {
    alert('Please check back when your trip is less than two weeks away!');
  }

  // get location in lat & lon
  userInputData['location'] = await Client.getLocation();
  console.log(userInputData);

  // check for valid city location
  if (userInputData['location'] === undefined) {
    userInputData['location'] = await Client.getCountryLocation();
  }

  const lat = userInputData.location.latitude;
  const lon = userInputData.location.longitude;

  // check to see if the trip will be within the next week
  if (isOneWeek) {
    userInputData['weather'] = await Client.getWeather(lat, lon);
  } else {
    userInputData['weather'] = await Client.getForecast(lat, lon, numDays);
  }
  
  console.log(userInputData);

  const city = userInputData.location.name;
  const country = userInputData.location.country;

  // retrieve picture from pixabay
  userInputData['pixabay'] = await Client.getPixabay(city, country);
  console.log(userInputData);

  // if only country input retrieve pic for country
  if (userInputData['pixabay'] === undefined) {
    userInputData['pixaby'] = await Client.getPixabayCountry(country);
  }

  

  // call updateUI function
  await Client.updateUI(userInputData['pixabay'].img,
                        userInputData['weather'].temp, 
                        userInputData['weather'].description,
                        tripLength);
  
}



