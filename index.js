require('dotenv/config')

const userRoute = require('./routes/user');
const studentRoute = require('./routes/student');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require("cors");

app.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const HTML_DIR = path.join(__dirname, '/client/')
app.use(express.static(HTML_DIR))


  app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '/client/login.html'));
  });
  app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '/client/signup.html'));
  });
  app.get('/students', function(req, res) {
    res.sendFile(path.join(__dirname, '/client/students.html'));
  });
  app.get('/students', function(req, res) {
    res.sendFile(path.join(__dirname, '/client/students.html'));
  });
  app.get('/add', function(req, res) {
    res.sendFile(path.join(__dirname, '/client/addstudent.html'));
  });

app.use("/api/student",studentRoute)
app.use("/api/user",userRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`server Running on PORT ${process.env.PORT}`)
});


