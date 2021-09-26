const express = require('express');
const chalk = require('chalk');
const port = 3000;
const path = require('path');
const app = express();

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname +'/views'));

app.get('/', (req, res) => {
  res.render('home');
})


app.get('/firmy/:name', (req, res) => {
  debugger;
  const { name } = req.params;
  const companies = [
    { slug: 'tworcastron', name: 'Twórca Stron.pl'},
    { slug: 'asvorltd', name: 'Asvor LTD'},
    { slug: 'brukbet', name: 'Bruk-BET'},
  ];
  console.log(chalk.bgRed(req.params.name));
  const company = companies.find(x => x.slug === name);
  res.render('company', {name: company?.name});

})

app.listen(port);

console.log('Polacy to debile');