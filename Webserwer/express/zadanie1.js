const express = require('express');
const port = 3000;
const app = express();

const users = [
  { id: 1, name: 'Janek', email: 'janek@gmail.com' },
  { id: 2, name: 'Adam', email: 'adam@gmail.com' },
  { id: 3, name: 'Tomasz', email: 'tomek@my.com' },
  { id: 4, name: 'Dawid', email: 'dawid@email.com' },
];

app.get('/', (req, res) => {
  res.send('Hello Express!');
})

app.get('/kontakt', (req, res) => {
  res.send('Hello Kontakt!');
})
app.get('/profile', (req, res) => {
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