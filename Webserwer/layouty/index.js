const express = require('express');
const chalk = require('chalk');
const port = 3000;
const path = require('path');
const app = express();

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname +'/views'));

const companies = [
  { slug: 'tworcastron', name: 'Twórca Stron.pl'},
  { slug: 'asvorltd', name: 'Asvor LTD'},
  { slug: 'brukbet', name: 'Bruk-BET'},
];

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/firmy', (req, res) => {
  let html = 'Lista firm: <br>';
  companies.forEach(myFunction);
  function myFunction() {
    html += `<li>${companies.name}</li><br>`
  };

})

app.get('/firmy/:name', (req, res) => {
  debugger;
  const { name } = req.params;

  console.log(chalk.bgRed(req.params.name));
  const company = companies.find(x => x.slug === name);
  res.render('company', {name: company?.name});

})
app.get('*', (req, res) => {
  res.render('errors/404');
})
app.listen(port);

console.log('Program działa');