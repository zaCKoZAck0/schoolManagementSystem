require('dotenv/config')

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");


const app = express();

app.options("*", cors({ origin: 'http://localhost:4000', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:4000", optionsSuccessStatus: 200 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const HTML_DIR = path.join(__dirname, '/public/')
app.use(express.static(HTML_DIR))

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/login.html'));
  });
  app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/signup.html'));
  });
  app.get('/students', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/students.html'));
  });
  app.get('/add', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/addstudent.html'));
  });

  app.listen(process.env.PORT, ()=>{
    console.log(`server Running on PORT ${process.env.PORT}`)
});
