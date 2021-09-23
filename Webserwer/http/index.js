const http = require('http');
const port = 3000;

const requestListener = (req, res) => {
  console.log('Ktoś wszedł na serwer.');
  res.writeHead(200);

  if (req.url === '/kontakt') {
    res.write('<h1>Kontakt</h1>')
    res.end();
  }
  if (req.url === '/') {
    res.write('<h1>Strona główa.</h1>')
    res.end();
  } else {
    res.write('<h1>404.</h1>')
    res.end();
  }
}

const server = http.createServer(requestListener);
server.listen(port, () => {
  console.log(`Serwer słucha na http://localhost:${port}`);
});