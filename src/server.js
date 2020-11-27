const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();


// Setup empty JS object to act as endpoint for all routes
let projectData = {};

//API Keys
GN_API_KEY = process.env.GN_API_KEY;


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

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// GET routes

app.get('/', (req, res) => {
  res.sendFile('dist/index.html');
});

// app.get('/results', (req, res) => {
//   res.send(JSON.stringify(projectData));
//   console.log('Get route called');
// });

// POST route

app.get('/results', async (req, res) => {
  console.log(req.query.city);
  const geoUrl = `http://api.geonames.org/searchJSON?q=${req.query.city}&maxRows=10&username=${GN_API_KEY}`;
  console.log(geoUrl);
  const response = await fetch(geoUrl);
  //console.log(response);

  try {
    const data = await response.json();
    //console.log(data);
    projectData = {
      data
    };
    console.log(data.geonames[0]);
    res.send(data);
  } catch (error) {
    console.log(`There has been error: ${error}`);
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