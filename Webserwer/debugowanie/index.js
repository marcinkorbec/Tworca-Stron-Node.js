const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
})

app.get('/firmy/:name', (req, res) => {
  const { name } = req.params;
  const companies = [
    { slug: 'tworcastron', name: 'Twórca Stron.pl'},
    { slug: 'asvorltd', name: 'Asvor LTD'},
    { slug: 'brukbet', name: 'Bruk-BET'},
  ];

  const company = companies.find(x => x.slug === name);

  if (!company) {
    res.send('Nie ma takiej firmy w bazie!')
  }
  res.send(`Nazwa firmy ${company.name}`);
})

app.listen(port);