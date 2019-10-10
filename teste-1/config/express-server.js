const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const consign = require('consign');
require('dotenv/config');

module.exports = () => {

  // Express instance
  const app = express();

  const debug = Boolean(Number(process.env.DEBUG)) || false;

  // Setting up general middlewares
  if (debug) {
    app.use(morgan('dev'));
  }
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());

  // Auto load API scripts
  consign()
  .include('routes')
  .into(app);

  // Create Server
  const server = http.createServer(app)

  // Getting the port 
  const PORT = process.env.PORT || 8080;

  server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  })

  return server;
};