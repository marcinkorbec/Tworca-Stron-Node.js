const http = require('http');

const requestListener = (req, res) => {
  console.log('Ktoś wszedł na serwer.');
  res.writeHead(200);

  if (req.url === 'kontakt')
  res.write('<title>Node</title>')
  res.end('<h1>Hello Node!</h1>');
}

const server = http.createServer(requestListener);
server.listen(3000, () => {
  console.log(`Serwer słucha na http://localhost:3000`);
});