const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();


const PORT = 8080;

//API Keys
const GN_API_KEY = process.env.GN_API_KEY;
const WB_API_KEY = process.env.WB_API_KEY;
const PB_API_KEY = process.env.PB_API_KEY;


// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));


// Setup Server



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


// ROUTES

// GET home page
app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

// GET geoname
app.get('/location', async (req, res) => {
  console.log(req.query.city);
  const geoUrl = `http://api.geonames.org/searchJSON?maxRows=1&q=${req.query.city}&username=${GN_API_KEY}`;
  console.log(geoUrl);
  const response = await fetch(geoUrl);
  //console.log(response);

  try {
    const data = await response.json();
    //console.log(data);
    // projectData = {
    //   data
    // };
    console.log(data.geonames[0]);
    res.send(data);
  } catch (error) {
    console.log(`There has been error: ${error}`);
  }
});


// GET weatherbit
app.get('/weather', async (req, res) => {

  const wbUrl = `https://api.weatherbit.io/v2.0/current?&lat=${req.query.lat}&lon=${req.query.lon}&key=${WB_API_KEY}&units=I`;
  console.log(wbUrl);

  const response = await fetch(wbUrl);

  try {
    const data = await response.json();
    console.log(data);
    res.send(data);

  } catch (error) {
    console.log(`There has been an error: ${error}`);
  }
});

// GET pixabay
app.get('/pix', async (req, res) => {

  const pbUrl = `https://pixabay.com/api/?q=${req.query.city}&key=${PB_API_KEY}&image_type=photo&per_page=3&category=places`;
  console.log(pbUrl);

  const response = await fetch(pbUrl);

  try {
    const data = await response.json();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(`There has been an error: ${error}`);
  }
});



// app.get('/results', (req, res) => {
//   res.send(projectData);
// });

// app.post('/', (req, res) => {
//   projectData.temp = req.body.temp;
//   projectData.date = req.body.date;
//   projectData.feelings = req.body.feelings;
//   console.log('Post route called');
//   res.end();
// });