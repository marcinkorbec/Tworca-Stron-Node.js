const http = require('http');

const requestListener = (req, res) => {
  console.log('Ktoś wszedł na serwer.');
  res.writeHead(200);

  if (req.url === 'kontakt') {
    res.write('<title>Kontakt</title>')
    res.end();
  }
}

const server = http.createServer(requestListener);
server.listen(3000, () => {
  console.log(`Serwer słucha na http://localhost:3000`);
});