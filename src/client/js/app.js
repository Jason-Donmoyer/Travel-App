


export async function getDataCall(e) {
  e.preventDefault();
  console.log('form submitted');

  let userInputData = [];

  userInputData['location'] = await Client.getLocation();
  console.log(userInputData);
  //alert(`Latitude: ${userInputData.location.latitude}`);

  const lat = userInputData.location.latitude;
  const lon = userInputData.location.longitude;
  
  userInputData['weather'] = await Client.getWeather(lat, lon);
  console.log(userInputData);

  const city = userInputData.location.name;
  const country = userInputData.location.country;

  userInputData['pixabay'] = await Client.getPixabay(city, country);
  console.log(userInputData);

  await Client.getCurrentDate();

  //document.querySelector('.test_div').style.backgroundImage = url(userInputData.pixabay.img);

  
}



// /* Global Variables */

// const zipCode = document.getElementById('zip');
// const feelings = document.getElementById('feelings');
// const generateWeather = document.getElementById('generate');
// const entryHolder = document.getElementById('entryHolder');
// const date = document.getElementById('date');
// const temp = document.getElementById('temp');
// const content = document.getElementById('content');
// const apiUrl = `api.openweathermap.org/data/2.5/weather?zip=`;
// const APIKey = '13113e1d1128465c8ea19117b412794e';
// const postUrl = 'http://localhost:8080/all';


// // Create a new date instance dynamically with JS
// let d = new Date();
// // add 1 to getMonth call to diplay correct month
// let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

// // Function to call API and get data

// const getWeather = async (apiUrl, zipCode, APIKey) => {
//   const url = `https://${apiUrl}${zipCode}&units=Imperial&appid=${APIKey}`;
//   try {
//     const res = await fetch(url);
//     let JSONData = await res.json();
//     return JSONData;
//   } catch (error) {
//     console.log('There has been an error', error);
//   }
// }

// // Post data function

// const postData = async (url, data) => {

//   const res = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)

//   });

// }

// // Update UI function

// const updateUserInterface = async () => {
//   const resData = await fetch(postUrl);
//   let jsonData = await resData.json();
//   date.innerHTML = `The current date is ${jsonData.date}`;
//   temp.innerHTML = `The temperature for your area is ${jsonData.temp} degrees F`;
//   content.innerHTML = `Looks like you\'re feeling ${jsonData.feelings}`;
//   feelings.value = '';

//   entryHolder.style.display = 'grid';
//   date.style.zIndex = 1;
//   temp.style.zIndex = 1;
//   content.style.zIndex = 1;
// }


// // Main Function

// const initiateProgram = async function () {
//   if (zipCode.value.length !== 5 || feelings.value === '') {
//     alert('Please enter valid data!');
//   } else {
//     const newData = await getWeather(apiUrl, zipCode.value, APIKey);
//     const weatherData = {
//       temp: newData.main.temp,
//       date: newDate,
//       feelings: feelings.value
//     }

//     await postData('http://localhost:8080/', weatherData)
//     updateUserInterface();
//   }
// }

// // Event listener to call main function

// // generateWeather.addEventListener('click', initiateProgram);

// // export {
// //   getWeather,
// //   postData,
// //   updateUserInterface,
// //   initiateProgram
// // };