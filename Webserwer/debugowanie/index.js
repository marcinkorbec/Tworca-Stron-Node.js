const express = require('express');

const chalk = require('chalk');

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
  console.log(chalk.bgRed(req.params.name));
  debugger;
  const company = companies.find(x => x.slug === name);

  if (!company) {
    res.send('Nie ma takiej firmy w bazie!')
  } else {
    res.send(`Nazwa firmy ${company.name}`);
  }
})

app.listen(port);