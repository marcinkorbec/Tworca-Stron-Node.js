const express = require('express');
const chalk = require('chalk');
const port = 3000;
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const app = express();

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname +'/views'));

//set layout
app.use(ejsLayouts);
app.set('layout', './layouts/main.ejs')

const companies = [
  { slug: 'tworcastron', name: 'Twórca Stron.pl'},
  { slug: 'asvorltd', name: 'Asvor LTD'},
  { slug: 'brukbet', name: 'Bruk-BET'},
];

app.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Strona główna'
  });
});

app.get(`/firmy`, (req, res) => {
  const { name } = req.params;
  const company = companies.find(x => x.slug === name);
  res.render('./pages/company-list', {
    title: 'Firmy',
    name: company?.name,
    companies
  });
});

app.get('/firmy/:name', (req, res) => {
  const { name } = req.params;
  console.log(chalk.bgRed(req.params.name));
  const company = companies.find(x => x.slug === name);
  res.render('./pages/company', {
    name: company?.name,
    companies,
    title: company?.name ?? 'Brak Wyników'
  });
});

app.get('*', (req, res) => {
  res.render('errors/404', {
      title: 'Nic nie znaleziono!',
      layout: 'layouts/minimalistic'
  });
});

app.listen(port);

console.log('Program działa');