const express = require('express');
const cors = require('cors');
const bcrypt = require("bcrypt-nodejs")
const knex = require('knex');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 3000;

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: '',
    password: '',
    database: 'face-detection'
  }
});

const database = {
  users: [
    {
      id: "1",
      name: "Alireza",
      password: "hello",
      email: "alireza@gmail.com",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "2",
      name: "Maryam",
      password: "helloback",
      email: "maryam@gmail.com",
      entries: 0,
      joined: new Date()
    }
  ]
}

app.get("/", (req, res) => {
  db('users').select('*').then(users => {
    res.json(users)
  })
})

app.post("/signin", (req, res) => {

  if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
    res.json(database.users[0])
  } else { res.status(404).json('User not found! Try again') }
})


app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  db('users').returning('*').insert({
    name: name,
    email: email,
    joined: new Date()
  }).then(user => res.json(user))
})

app.get("/profile/:id", (req, res) => {
  const { id } = req.params;
  db('users').select('*').where({
    id: id
  }).then(user => {
    if (user.length) {
      res.json(user[0])
    } else {
      res.status(400).json("User not found!")
    }
  })
})

app.put("/image", (req, res) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => res.json(entries[0]))
    .catch(err => res.status(400).json("Unable to get the number of entries"))
})

app.listen(PORT, () => {
  console.log(`Server has started listening to port ${PORT}`);
})

