// require node-fetch and dotenv
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

// Server Port
const PORT = 8080;

//API Keys
const GN_API_KEY = process.env.GN_API_KEY;
const WB_API_KEY = process.env.WB_API_KEY;
const PB_API_KEY = process.env.PB_API_KEY;


// require Express
const express = require('express');

// set up Express
const app = express();

// require and set up body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// require and set up Ccors
const cors = require('cors');
app.use(cors());

// Main project folder
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

// GET route for geoname city location
app.get('/location', async (req, res) => {
  console.log(req.query.city);
  const geoUrl = `http://api.geonames.org/searchJSON?maxRows=1&q=${req.query.city}&country=${req.query.country}&username=${GN_API_KEY}`;
  console.log(geoUrl);
  const response = await fetch(geoUrl);

  try {
    const data = await response.json();
    console.log(data.geonames[0]);
    res.send(data);
  } catch (error) {
    console.log(`There has been error: ${error}`);
  }
});

// GET route for geoname country location
app.get('/locationcountry', async (req, res) => {
  console.log(req.query.city);
  const geoUrl = `http://api.geonames.org/searchJSON?maxRows=1&country=${req.query.country}&username=${GN_API_KEY}`;
  console.log(geoUrl);
  const response = await fetch(geoUrl);

  try {
    const data = await response.json();
    console.log(data.geonames[0]);
    res.send(data);
  } catch (error) {
    console.log(`There has been error: ${error}`);
  }
});


// GET route for current weather
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

// GET route for forecast
app.get('/forecast', async (req, res) => {

  const wbUrl = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.lat}&lon=${req.query.lon}&key=${WB_API_KEY}&units=I`;
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

// GET route for city pic
app.get('/pix', async (req, res) => {

  const pbUrl = `https://pixabay.com/api/?q=${req.query.city}+${req.query.country}&key=${PB_API_KEY}&image_type=photo&per_page=3&category=places`;
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

// GET route for country pic
app.get('/countrypix', async (req, res) => {

  const pbUrl = `https://pixabay.com/api/?q=${req.query.country}&key=${PB_API_KEY}&image_type=photo&per_page=3&category=places`;
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

