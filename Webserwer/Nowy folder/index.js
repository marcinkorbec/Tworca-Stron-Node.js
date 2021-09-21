const http = require('http');

const server = http.createServer(function (req, res) {
  console.log('Ktoś wszedł na serwer.')
  res.end('Hello Node!')
  
});

server.listen(3000);