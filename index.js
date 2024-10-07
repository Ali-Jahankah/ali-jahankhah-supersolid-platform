const express = require('express');
//Using dotenv to be able to use env vars
require('dotenv').config();
const path = require('path');
const scoreRoutes = require('./routes/scoreRoutes');

const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname));
//Parse request body for the post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
//Reafactore the routes and redirecting requests starting with '/api' to scoreRoutes file
app.use('/api', scoreRoutes);
//Adding Dynamic port in case of deployment
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server', process.pid, 'listening on port', port);
});
