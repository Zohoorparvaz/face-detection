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
  let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      res.json(user)
    }
  })
  if (found === false) {
    res.status(404).json("User not found!")
  }
})

app.put("/image", (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach(user => {
    if (user.id === id) {
      found = true;
      user.entries++;
      res.json(user.entries)
    }
  })
  if (found === false) {
    res.status(404).json("User not found!")
  }
})



// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function (err, res) {
//   // res == true
// });
// bcrypt.compare("veggies", hash, function (err, res) {
//   // res = false
// });

app.listen(PORT, () => {
  console.log(`Server has started listening to port ${PORT}`);
})

