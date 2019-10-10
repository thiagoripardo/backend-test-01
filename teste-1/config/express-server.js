const express = require('express');
const http = require('http');
require('dotenv/config');

module.exports = () => {
  
  // Express instance
  const app = express();

  app.get('/', function (req, res) {
      res.json({message: 'Root API'});
  })

  // API routes here...

  // Create Server
  const server = http.createServer(app)

  // Getting the port 
  const PORT = process.env.PORT || 8080;

  server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  })

  return server;
};
