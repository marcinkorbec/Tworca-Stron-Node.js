const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
})

app.get('/firmy/:name', (req, res) => {
  const {name} = req.params.name;
  res.send('Kontakt');
})

app.listen(port);