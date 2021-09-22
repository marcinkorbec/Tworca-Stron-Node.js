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
   let html =  `Znaleziono ${users} profile.`;
  for (const user of users) {
    console.log(element);
  }
   res.send(html);
})

app.get('/profile/:id/:mode?', (req, res) => {

})

app.listen(port);