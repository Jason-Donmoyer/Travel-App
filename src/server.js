const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();


// Setup empty JS object to act as endpoint for all routes
projectData = {};

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

app.get('/results', (req, res) => {
  res.send(JSON.stringify(projectData));
  console.log('Get route called');
});

// POST route

app.post('/results', async (req, res) => {
  const response = await fetch(APIcall);

  try {
    const data = await response.json();
    projectData = {};
    res.send(data);
  } catch (error) {
    console.log(`There has been error: ${error}`);
  }
});

app.post('/', (req, res) => {
  projectData.temp = req.body.temp;
  projectData.date = req.body.date;
  projectData.feelings = req.body.feelings;
  console.log('Post route called');
  res.end();
});