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
  res.render('home'), {
    title: 'Strona główna'
  };
})

app.get(`/firmy`, (req, res) => {
  let html = '<h1>Lista firm: </h1><br>';
  for (const { slug, name } of companies) {
    html += `<li><a href="/firmy/${slug}">${name}</a></li><br>`
  }
  res.send(html, {title: 'Lista'});
})
app.get('/firmy/:name', (req, res) => {
  debugger;
  const { name } = req.params;

  console.log(chalk.bgRed(req.params.name));
  const company = companies.find(x => x.slug === name);
  res.render('company', {
    name: company?.name,
    companies,
    title: company?.name ?? 'Brak Wyników'
  });

})
app.get('*', (req, res) => {
  res.render('errors/404', {
      title: 'Błąd'
  });
})
app.listen(port);

console.log('Program działa');