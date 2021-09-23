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
  let html =  `Znaleziono ${users.length} profile.<br>`;
  for (const {id, name} of users) {
    html += `- <a href="/profile/${id}"> ${name} (id: ${id})</a><br>`;
  }
  res.send(html);
})

app.get('/profile/:id/:mode?', (req, res) => {
  const {id, mode} = req.params;
  const user = users.find(u => u.id === Number(id))
  if (!user) {return res.send('Nie ma takiego użytkownika!');}
  if (!mode) {res.send(`Dane użytkownika: imię "${user.name}", Id: ${user.id} `);}
  else if (mode === 'szczegoly') {res.send(`Dane użytkownika: imię "${user.name}", Id: ${user.id}, email: ${user.email} `);}
})

app.listen(port);