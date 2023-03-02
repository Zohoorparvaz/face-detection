const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const user = [
  {
    name: "Alireza",
    password: "123",
    email: "alireza@gmail.com",
    entries: 0,
    joined: new Date(),
  },
  {
    name: "Maryam",
    password: "124",
    email: "maryam@gmail.com",
    entries: 0,
    joined: new Date()
  }
]

app.get("/", (req, res) => {
  res.send("getting home page");
})

app.listen(PORT, () => {
  console.log(`Server has started listening to port ${PORT}`);
})

