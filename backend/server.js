const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

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
  res.json(database.users)
})

app.post("/signin", (req, res) => {
  if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
    res.json(`Welcome ${database.users[0].name}`)
  } else { res.status(404).json('User not found! Try again') }
})

app.post("/register", (req, res) => {
  const { email, name, password } = req.body;
  database.users.push(
    {
      id: "3",
      name: name,
      password: password,
      email: email,
      entries: 0,
      joined: new Date(),
    }
  );
  res.json(database.users[database.users.length - 1])

})

app.listen(PORT, () => {
  console.log(`Server has started listening to port ${PORT}`);
})

